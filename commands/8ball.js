const { MessageEmbed  } = require('discord.js');
module.exports = {
      name: '8ball',
	description: 'QA',
	args: true,
     execute(message, client,args) => {
     let reason = args.join(' ');
    if (reason.length < 1) return message.channel.send('You did not give the bot a question');
    var ball = ['It is certain.','No doubt about it.','No chance.','Maybe, time will tell.','No way.','Concentrate and try again.', ' As I see it, yes', 'Outlook good', 'Most likely', 'Better not tell you now', 'My sources say no', 'Signs point to yes', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'My sources say no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
    const embed = new MessageEmbed()
    .setColor(0x00A2E8)
    .addField("You asked", reason)
    .addField("Hedwig says", ball[Math.floor(Math.random () * ball.length)])
    .setThumbnail("http://www.pngmart.com/files/3/8-Ball-Pool-Transparent-PNG.png")
    message.channel.send({embed})
}
