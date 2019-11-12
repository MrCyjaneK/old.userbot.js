const fs = require("fs");
module.exports = ((api,message,user) => {
    msg = message.body;
    arg = msg.toLowerCase().split(' ');
    if (!arg[1]) {
        api.sendMessage("Invalid syntax, use .cmds help",message.threadID);
    } else {
        if (arg[1] == 'help') {
            api.sendMessage("Valid syntax: .cmds help/list",message.threadID);
        }
        if (arg[1] == 'list') {
            api.sendMessage(`List of commands: ${ fs.readdirSync('./commands/').join(', ') }`,message.threadID);
        }
    }
})