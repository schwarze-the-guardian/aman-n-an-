const { MessageEmbed } = require('discord.js')
const a = require("../ayar/ayarla.json")
const data = require('quick.db')

   exports.run = async(client, message, args) => {
    const anan = await data.fetch(`snipe.id.${message.guild.id}`)
    if(!anan) {
    const embeds = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`Mesaj bulunamadı!`)
.setColor(`#f3c7e1`)
    message.channel.send(embeds);
          } else {
  let kullanıcı = client.users.cache.get(anan);
  const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
  .setDescription(`Silinen mesaj: ` + silinen)
.setColor(`#f3c7e1`)
  message.channel.send(embed) }
}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}
exports.help = {
  name: "snipe",
  description: 'Son silinen mesajı yakalar.',
  usage: 'snipe'
} 