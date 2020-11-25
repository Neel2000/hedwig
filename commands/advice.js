const snekfetch = require("snekfetch")
module.exports = {
	name: 'advice',
	description: 'advice',
	args: true,
	execute(message, client,args) {
		 try {
			 snekfetch.get('http://api.adviceslip.com/advice').then(body => message.channel.send(JSON.parse(body.toString()).slip.advice)); // r.body is buffer
        	} catch (err) {
        		message.channel.send(`An error occurred: \`${err.message}\`. Try again later!`);
        	}
	},
};
