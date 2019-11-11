const prompts = require('prompts');
const fs      = require("fs");
const login   = require("facebook-chat-api");
const db = require("./functions/db.js");
(async () => {
  const response = await prompts([{
    type: 'text',
    name: 'email',
    message: 'Facebook email'
  },
  {
  	type: 'text',
  	name: 'password',
  	message: 'Facebook password'
  }]);
  console.log(response);
  login({email: response.email, password: response.password}, (err, api) => {
    if(err) return console.error(err);
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
    api.setOptions({selfListen: true});
    api.setOptions({listenEvents: true});
    api.listen((err, message) => {
        if (message.type == "message") {
            if (message.body == ".setme") {
                // Getting the actual sender name from ID involves calling
                // `api.getThreadInfo` and `api.getUserInfo`
                db.set(
                  {
                    "id": message.senderID
                  },'me'
                );
                api.sendMessage({
                    body: 'As you say.'
                }, message.threadID);
            }
        }
    });
    console.log('Please send ".setme" to bot.');
    console.log("Saved data to appstate.json");
    console.log("To run use 'node index.js'");
});
})();
