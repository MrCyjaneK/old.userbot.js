module.exports = ((api,message,user) => {
    api.sendMessage("Testing...",message.threadID);
    require('speedtest-net')().on('done', dataOverload => {
        //console.dir(dataOverload);
        r = dataOverload;
        bs = r.bestServer;
        dl = Number(r.speedTestDownloadSpeed * 125 / 1024).toFixed(3); //MB/s
        up = Number(r.speedTestUploadSpeed * 125 / 1024).toFixed(3); //MB/s
        api.sendMessage(`SPEEDTEST RESULTS\n🖥️Host: ${ bs.country }, ${ bs.name } (${bs.cc})\n        By: ${ bs.sponsor }\n🏓Ping: ${ bs.bestPing }\n👎Download: ${ dl } MB/s\n👍Upload: ${ up } MB/s`,message.threadID)
      });
})