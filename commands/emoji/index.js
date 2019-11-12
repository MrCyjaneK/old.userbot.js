module.exports = ((api,message,user) => {
    randemoji = require('emojis-list')[Math.floor(Math.random() * require('emojis-list').length)];
    api.changeThreadEmoji(randemoji, message.threadID, (err) => {
        if(err) return api.sendMessage(err.toString(),message.threadID);
    });
})