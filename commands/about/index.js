module.exports = ((api,message,user) => {
    api.getThreadInfo(message.threadID, ((err,info) => {
        if (info.name == null) {
            api.sendMessage(`Hey, this is userbotjs\nI'm self-hosted facebook bot that is flexible and plugable\nDeveloped by: Czarek Nakamoto (Cyjan)\nYou can obtain free copy at Microsoft Github github.com/MrCyjaneK/userbot.js`,message.threadID)
        } else {
            api.sendMessage(`Hey ${ info.name }, this is userbotjs\nI'm self-hosted facebook bot that is flexible and plugable\nDeveloped by: Czarek Nakamoto (Cyjan)\nYou can obtain free copy at Microsoft Github github.com/MrCyjaneK/userbot.js`,message.threadID)
        }
    }))
})