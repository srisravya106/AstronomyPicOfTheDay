var request = require('request')
var dateFormat = require('dateformat')
var TelegramBot = require('node-telegram-bot-api');
var apikey = "1269980408:AAG9WF6lyRzEnx-RpFTgOQmpliDEzXOq3j0";
var bot = new TelegramBot(apikey,{polling: true});



bot.on('message', (msg) => {

	var hi = "hi";
	var bye = "bye";
	var show = "show"
	if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
		bot.sendMessage(msg.chat.id,"Hello Sravya .Welcome to Astronomy Pic of The Day. Are you ready to see pic captured by NASA today? Enter today's date to view pic. Date-format : yyyy-mm-dd . ");
	} 

	else if (msg.text.toString().toLowerCase().includes(bye)) {
		bot.sendMessage(msg.chat.id, "Hope to see you around tomorrow to show another pic , Bye");
	} 
	
	else if(msg.text.toString() == dateFormat(msg.text,"isoDate")){
    	request('https://api.nasa.gov/planetary/apod?api_key=sFyeZ3OkhwkJ4tVxzRHzkw21dOYL69Ncq2KcuuQa',function(error,response,body){
			if(error){
				bot.sendMessage(msg.chat.id,"Something went wrong.Please contact administrator")
			}
			else{
				var hd = false;
				console.log(body)
				bot.sendMessage(msg.chat.id,"The astronomy pic of the day " + body)
			}
		})
	}

});