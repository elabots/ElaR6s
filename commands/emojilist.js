
const Discord = require("discord.js");

exports.run = (client, message, args) => {

  const guild = message.guild;
  const embed = new Discord.RichEmbed()
    .setAuthor(`${guild.name}'s Custom Emojis`, guild.iconURL)
    .setDescription(guild.emojis.map(e=>e.toString()).join(" "));
  message.channel.send({embed});
}