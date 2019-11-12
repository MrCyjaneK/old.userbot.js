module.exports = (async (api,message,user) => {
    var t0 = new Date().getTime();
    await ((api,message) => {
        api.sendMessage("Pong!", message.threadID);
    })(api,message)
    var t1 = new Date().getTime();
    setTimeout(() => {
        api.sendMessage("Reply took: "+Number(t1-t0).toFixed(2)+"ms", message.threadID);
    },2500);
})