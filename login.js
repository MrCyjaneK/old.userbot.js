const prompts = require('prompts');
const fs      = require("fs");
const login   = require("facebook-chat-api");
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
    console.log("Saved data to appstate.json");
    console.log("To run use 'node index.js'");
});
})();
