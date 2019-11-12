module.exports = ((api,message,user) => {
    kolory = [];
  	for (color in api.threadColors) {
  		kolory.push(api.threadColors[color]);
  	}
  	api.changeThreadColor(kolory[Math.floor(Math.random() * kolory.length)], message.threadID, (err) => {
   		if(err) return api.sendMessage(err.toString(),message.threadID);
	});

})