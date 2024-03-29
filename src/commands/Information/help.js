const {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
} = require("discord.js");

module.exports = {
  name: "help",
  category: "Information",
  aliases: ["h"],
  description: "Get Help Menu",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const lawde = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("YT Channel")
        .setStyle("LINK")
        .setURL(`https://www.youtube.com/@calestialotaku`),
      new MessageButton()
        .setLabel("Instagram")
        .setStyle("LINK")
        .setURL(`www.instagram.com/calestialotaku`),
      new MessageButton()
        .setLabel("X")
        .setStyle("LINK")
        .setURL(`https://x.com/CalestialOtaku`),
    );

    let helpmenu = new MessageEmbed()

      .setAuthor({
        name: `${client.user.username} Help Pannel`,
        iconURL: client.user.displayAvatarURL(),
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61",
      )

      .setDescription(
        `<a:cursor1:1223137851064188949> Prefix for this server is: ${prefix}\n<:online:1210253399031812147> Total Commands: ${client.commands.size}\n<:online:1210253399031812147>**A Rich Quality Music Bot
Prefix For this server : - **
  
  <a:cursor1:1223137851064188949> [Invite ${client.user.username}](https://discord.gg/k7euMVR4q6)
  
  <a:cursor1:1223137851064188949> [Vote ${client.user.username}](https://discord.gg/k7euMVR4q6)
\n**Command Categories**\n<:online:1210253399031812147> : **Info**\n<:online:1210253399031812147> : **Music**\n<:online:1210253399031812147> : **Filters**\n<:online:1210253399031812147> : **Settings**\n<:online:1210253399031812147> :  **Utility**\n<:online:1210253399031812147> : **All Commands**`,
      )

      //  .setFooter(ee.footertext, ee.footericon)
      .setFooter({
        text: `Thanks For Using Cursor`,
        iconURL: message.guild.iconURL({ dynamic: true }),
      })
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setColor("#303037");

    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("help")
        .setPlaceholder("Main Command")
        .addOptions([
          {
            label: "Info",
            description: "Information Commands Of Cursor",
            value: "first",
            emoji: "ℹ️",
          },
          {
            label: "Music",
            description: "Music Commands Of Cursor",
            value: "second",
            emoji: "🎵",
          },
          {
            label: "Filters",
            description: "Filter Commands Of Cursor",
            value: "fourth",
            emoji: "🎧",
          },
          {
            label: "Setting",
            description: "Configuration Commands Of Cursor",
            value: "fifth",
            emoji: "🎙️",
          },
          {
            label: "Utility",
            description: "Utility commands of Cursor",
            value: "sixth",
            emoji: "⚒️",
          },
          {
            label: "All Commands",
            description: "All Commands Of Cursor",
            value: "third",
            emoji: "⚙️",
          },
        ]),
    );
    if (!args[0])
      return message.reply({ embeds: [helpmenu], components: [row, lawde] });
    //message.reply({ embeds: [helpmenu], components: [row] })
  },
};
