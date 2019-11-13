var execSh = require("exec-sh");
module.exports = ((api,message,user) => {
    execSh([message.body.substr(5)+'2>&1 | sed -r \'s/\'$(echo -e "\033")\'\[[0-9]{1,2}(;([0-9]{1,2})?)?[mK]//g\''], true,
    function(err, stdout, stderr){
      api.sendMessage("error: "+err+"\n"+
      "stdout: \n"+stdout,message.threadID);
    });

});
