module.exports = ((api,message,user) => {
    msg = message.body.toLowerCase();
    cmd = msg.split(' ');
    if(cmd[1]) {
        mentions = message.mentions;
        for ( i in mentions ) {
            ((mention,api,message,cmd) => {
                api.removeUserFromGroup(mention,message.threadID, 
                    ((err) => {
                        if (err) {
                            console.log(err)
                            return api.sendMessage("An error occured.\nAre you admin?",message.threadID);
                        }
                        if (cmd[cmd.length -1] && `${ Number(cmd[cmd.length - 1]) }` == 'NaN') {
                            setTimeout(() => {
                                api.addUserToChat(i,message.threadID,((err) => {
                                if (err) return api.sendMessage("Unable to add user to chat", message.threadID);
                                    })
                                )
                            },cmd[cmd.length -1]*60*1000);
                        }
                    })
                )
            })(mentions[i],api,message,cmd)
        }
    } else {
        api.sendMessage("Invalid syntax, use:\n'.kick @Mention [Reason] [time in minutes (eg. 60)]'", message.threadID);
    }
})