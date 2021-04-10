const Discord = require("discord.js");
const a = require("../ayar/ayarla.json")
exports.run = async(client, message, args, ayar, emoji) => {
 if (!message.member.roles.cache.has(a.Yetkiler.Yetkili) && !message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField("Yetkin Yok ",`Bu Komutu Kullanmak için <@&779717673381527593> Rolüne Sahip Olman Lazım.`));
  
let tag = a.Diğer.tag;
const aktif = message.guild.members.cache.filter(aktif => aktif.presence.status != "offline").size
const herkes = message.guild.memberCount
const seste = message.guild.channels.cache.filter(channel => channel.type === "voice").map(channel => channel.members.size).reduce((a, b) => a + b)
const tagta = message.guild.members.cache.filter(t => t.user.username.includes(tag)).size
const boost_sayisi = message.guild.premiumSubscriptionCount

const mapping = {
      "0" : "<a:avi_syi0:830073940264091719>",
      "1" : "<a:avi_s1:830073457139777556>",
      "2" : "<a:avi_s2:830073554942427156>",
      "3" : "<a:avi_s3:830073631777357866>",
      "4" : "<a:avi_s4:830074011651276820>",
      "5" : "<a:avi_s5:830073712887070811>",
      "6" : "<a:avi_s66:830073787998797835>",
      "7" : "<a:avi_s7:830073850325762058>",
      "8" : "<a:avi_s8:830073869599637514>",
      "9" : "<a:avi_s9:830073890620833882>"
      };


let toplam =  
    `${herkes}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
let online =  
    `${aktif}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")

let sesli =  
    `${seste}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
let tagli =  
    `${tagta}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
let booster =  
    `${boost_sayisi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")



const embed = new Discord.MessageEmbed()

.setColor('#080224')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`**• Toplam Üye ・ ${toplam}
• Aktif Üye ・ ${online}
• Sesteki Üye ・ ${sesli}
• Taglı Üye ・ ${tagli}
• Boost Sayısı・ ${booster}**`)
message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};