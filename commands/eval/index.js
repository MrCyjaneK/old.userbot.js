module.exports = (async (api,message,user) => {
    api.deleteMessage(message.messageID);
    cmd = message.body.split(' ');
    cmd.shift();
    cmd = cmd.join(' ')
    console.log(cmd);
    api.sendMessage("Evaluating JavaScript code:\n"+cmd,message.threadID);
    output = await eval(
        "(async (api,message) => { \n"+
            cmd+
        "\n})(api,message)"
    );
    setTimeout(() => {api.sendMessage("Returned Value:\n"+output,message.threadID)},2500);
});