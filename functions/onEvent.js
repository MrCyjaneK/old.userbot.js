module.exports = ((api, err, message, user,callCommand) => {
    //console.log(err,message,user);
    if (message.senderID == user) {
        // We
        if (message.body.toLowerCase().substr(0,1) == ".") {
            cmdname = message.body.toLowerCase().substr(1).split(' ')[0];
            callCommand(api,message,user,cmdname);
        }
    } else {
        // Somebody else
    }
})