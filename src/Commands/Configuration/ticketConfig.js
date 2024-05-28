const config = require("../../Schemas.js/Config");
const Guilded = require("guilded.js");

module.exports = {
  name: "ticketConfig",
  aliases: ["tc", "tickets"],
  description: "Args = [CategoryId*] | [CommandOpenToggle] | [PanelOpenToggle] | [PanelTitle] | [PanelDescription] | [PanelFooter] | [PanelImage] | [OpenEmojiId]",
  async execute(message, client, args) {
    const data = await config.findOne({ Guild: message.serverId });

    if (!data) {
      await config.create({
        Guild: message.serverId
      });

      const response = new Guilded.Embed()
        .setDescription("Generating Server Configuration Data, Try The Command Again.")
        .setColor(0xff0ff0)

      return message.reply({ embeds: [response], isPrivate: true });
    }

    let options = message.content.slice(5).split("|").map(option => option.trim());

    let catId = options[0] === "." ? null : Number(options[0]);
    let CommandOpenToggle = options[1] === "." ? true : options[1] === "true";
    let PanelOpenToggle = options[2] === "." ? false : options[2] === "true";
    let PanelTitle = options[3] === "." ? "Open a Ticket!" : options[3];
    let PanelDescription = options[4] === "." ? "Use the Ticket System to contact staff about any support needs." : options[4];
    let PanelFooter = options[5] === "." ? "Press the Reaction Below to Open A Ticket" : options[5];
    let PanelImage = options[6] === "." ? 'https://images-ext-1.discordapp.net/external/7WkCF3L0mTqT6uonrTgFrSHHuNZDqsA1twryUNwixR0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/557628352828014614/dd89587457ef9f971d331426cad9e2be.png?format=webp&quality=lossless&width=465&height=465' : options[6];
    let OpenEmoji = options[7] === "." ? Number(90001828) : Number(options[7]);

    // console.log(options);
    if (!options[0]) {
      const response = new Guilded.Embed()
        .setTitle('Please provide some arguments')
        .setDescription("The arguments are listed here (IN ORDER):\n- CategoryId* (Required)\n- CommandOpenToggle\n- PanelOpenToggle\n- PanelTitle\n- PanelDescription\n- PanelFooter\n- PanelImage\n- OpenEmojiId\n\nTo use this, here is an example\n```t/tc 1234 | true | false | Open a Ticket! | Use the Ticket System to contact staff about any support needs. | Press the Reaction Below to Open A Ticket | . | 90001828\n```\nIf you dont want to change something use a period (.) to pass it.")
        .setColor(0xff0000)

      return message.reply({ embeds: [response], isPrivate: true });
    }

    let cat;
    if (catId !== null) {
      try {
        cat = await client.categories.fetch(message.serverId, catId);
      } catch {
        const response = new Guilded.Embed()
          .setDescription("Please Input A VALID Category ID")
          .setColor(0xff0000)
          .setImage("https://cdn.gilcdn.com/ContentMediaGenericFiles/e704b194519f3a4a24bf28311950824a-Full.webp?w=278&h=234&Expires=1716816131&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzE2ODE2MTMxfSwiSXBBZGRyZXNzIjp7IkFXUzpTb3VyY2VJcCI6IjEuMTQwLjIyNS44NCJ9fX1dfQ__&Signature=iWdKH91SN9uhFZRaT6QfhxdM50a6X6EBYp3cez2thDuzR5Ms2mnm8ApWBK-NMgeS5uBvba8mLp-EuzfiN2j7BeP4u1gZYyueqW3VGWSvulgyo5MtLaJ72TqjnIffpyQ786zEmiGEq9pKb2uAcsQaHabE7sBVqKAp47MGkbxp8SI8j9PD8a82SIB4FBlYznKH6JR1bkiUWWtMor6UD7CN9qCVm-rIJPwVpF~BoLrYJ69sobZJ-3EDcwonIcczX4a211zKg8zgr3PcBBd-jr4SlaVRyIsmSPbXCjrGTWCc0xBOAZ4VocfjG~CGGEqkswozayD9HFXCp4GEQ9y5yrorDg__&Key-Pair-Id=K1FFKFZRWAZSB");

        return message.reply({ embeds: [response], isPrivate: true });
      }
    }

    data.TicketCategory = catId;
    data.TicketCommandToggle = CommandOpenToggle;
    data.TicketPanelToggle = PanelOpenToggle;
    data.TicketPanelTitle = PanelTitle;
    data.TicketPanelDescription = PanelDescription;
    data.TicketPanelFooter = PanelFooter;
    data.TicketPanelImage = PanelImage;
    data.TicketOpenEmoji = OpenEmoji;

    // console.log({
    //   TicketCommandToggle: CommandOpenToggle,
    //   TicketPanelToggle: PanelOpenToggle,
    //   TicketPanelTitle: PanelTitle,
    //   TicketPanelDescription: PanelDescription,
    //   TicketPanelFooter: PanelFooter,
    //   TicketPanelImage: PanelImage,
    //   TicketOpenEmoji: OpenEmoji,
    // });
    await data.save();

    const finalResponse = new Guilded.Embed()
      .setDescription(`🎫 The Ticket Category Has Been Set to - **${cat.name}**`)
      .setColor(0x00ff00);

    if (PanelOpenToggle == true) {
      const TicketPanel = new Guilded.Embed()
        .setTitle(PanelTitle)
        .setDescription(PanelDescription)
        .setFooter(PanelFooter)
        .setThumbnail(PanelImage);
        const channel = await client.channels.fetch(message.channelId);
        const msg = await channel.send({ embeds: [TicketPanel] });
      await msg.addReaction(OpenEmoji);
    }

    return message.reply({ embeds: [finalResponse], isPrivate: true });
  },
};
