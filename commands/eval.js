const { MessageEmbed  } = require('discord.js');
const { inspect } = require('util');
module.exports = {
	name: 'eval',
	description: 'Evaluate the expression.',
	execute(msg) {
          const query = msg.content.toLowerCase().replace('+eval','')
          const embed = new MessageEmbed().setFooter(msg.author.tag, msg.author.displayAvatarURL)
          const code = (lang, code) => (`\`\`\`${lang}\n${String(code).slice(0, 1000) + (code.length >= 1000 ? '...' : '')}\n\`\`\``)      
          if (!query) msg.channel.send('Please, write something so I can evaluate!')
          else {
            try {
              const evald = eval(query)
              const res = typeof evald === 'string' ? evald : inspect(evald, { depth: 0 })

              embed.addField('Result', code('js', res))

              if (!Boolean(res) || (!Boolean(evald) && evald !== 0)) embed.setColor('RED')
              else {
                embed
                  .addField('Type', code('css', typeof evald))
                  .setColor('GREEN')
              }
            } catch (error) {
              embed
                .addField('Error', code('js', error))
                .setColor('RED')
            } finally {
              msg.channel.send(embed).catch(error => {
                msg.channel.send(`There was an error while displaying the eval result! ${error.message}`)
              })
            }
          }
  }
}         