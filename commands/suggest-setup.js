module.exports = {
    name: 'suggest-setup',
    description: 'Setup Suggest Channel',
  async execute(message, args, Discord, client){
    

    const suggest = await message.guild.channels.create('🐌suggestions', {type: 'text' });
    suggestID = suggest.id;


    const firstmsg = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription('Thanks for adding suggest - setup!')
    .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}));
    message.channel.send(firstmsg);

    console.log('Setup Done')



client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.id === suggestID) {
    message.delete();
      const embed2 = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription('`' + message.content + '`')
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}));
    message.channel.send({ embed: embed2 }).then(embedMessage => {
         embedMessage.react('✔️');
        embedMessage.react('❌');
                });
            }
        });
    }
}
