const fs = require("fs");
const login = require("facebook-chat-api");
const db = require("./functions/db.js");
const onEvent = require("./functions/onEvent.js");
const callCommand = require("./functions/callCommand.js");
db.set({"a":"b"});
db.get().then((data) => {
    console.log(data)
})
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    const user = api.getCurrentUserID();
    if(err) return console.error(err);
    api.setOptions({selfListen: true});
    api.setOptions({listenEvents: true});
    api.listen((err, message) => {
        onEvent(api,err,message,user,callCommand);
    })
});