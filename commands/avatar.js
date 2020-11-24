const { MessageEmbed  } = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Display Avatar',
	execute(message,client) {
    let embedContent = message.content.substring(9);
    let embed = new MessageEmbed();
    embed.setImage(message.author.avatarURL());
    message.channel.send(embed);
	},
};
