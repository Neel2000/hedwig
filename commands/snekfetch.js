const snekfetch = require("snekfetch")
module.exports = {
	name: 'snekfetch',
	description: 'snekfetch',
	args: true,
	execute(message, client,args) {
		 try {
        		const { body } = await snekfetch.get('http://api.adviceslip.com/advice');
        		message.channel.send(JSON.parse(body.toString()).slip.advice);
        	} catch (err) {
        		message.channel.send(`An error occurred: \`${err.message}\`. Try again later!`);
        	}
	},
};
