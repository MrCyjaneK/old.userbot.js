var execSh = require("exec-sh");
module.exports = ((api,message,user) => {
    execSh([message.body.substr(5)], true,
    function(err, stdout, stderr){
      api.sendMessage("error: "+err+"\n"+
      "stdout: \n"+stdout+"\n"+
      "stderr: "+stderr,message.threadID);
    });

});