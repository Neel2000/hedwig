const snekfetch = require("snekfetch")
module.exports = {
	name: 'advice',
	description: 'advice',
	args: true,
	async execute(message, client,args) {
		 try {
			 console.log("Running advice")
			 await snekfetch.get('http://api.adviceslip.com/advice').then(r => {
				 console.log(r.body.toString());
				 message.channel.send(JSON.parse(r.body.toString()).slip.advice);
			 })
			 console.log("Ran advice")
        	} catch (err) {
        		message.channel.send(`An error occurred: \`${err.message}\`. Try again later!`);
        	}
	},
};
