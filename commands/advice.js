const snekfetch = require("snekfetch")
module.exports = {
	name: 'advice',
	description: 'advice',
	args: true,
	async execute(message, client,args) {
		 try {
        		 console.log("starting advice")
			 const { body } = await snekfetch.get('http://api.adviceslip.com/advice');
			 console.log("got advice")
        		message.channel.send(JSON.parse(body.toString()).slip.advice);
        	} catch (err) {
        		message.channel.send(`An error occurred: \`${err.message}\`. Try again later!`);
        	}
	},
};
