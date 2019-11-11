const fs = require('fs');
module.exports = ((api,message,user,command) => {
    fs.access("./commands/"+command+"/index.js", fs.F_OK, (err) => {
        if (err) {
          api.sendMessage("Invalid command", user);
          return
        }
        require("../commands/"+command+"/index.js")(api,message,user);
        return;
    })
})