const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("소라고동")
        .setDescription("소라고동님 알려주세요")
        .addStringOption((option) =>
            option.setName("content").setDescription("내용 입력").setRequired(true),
        ),
    async execute(interaction) {
        const string = interaction.options.getString("content");
        const ans = ["Yes", "No"];
        const emojiList = [
            ":laughing:",
            ":blush:",
            ":smile:",
            ":sweat_smile:",
            ":upside_down:",
            ":yum:",
            ":stuck_out_tongue_closed_eyes:",
            ":zany_face:",
            ":pensive:",
            ":frowning2:",
            ":thinking:",
        ];
        const randomEmoji = Math.floor(Math.random() * 11);
        const randomAns = Math.floor(Math.random() * 2);

        const embed = new MessageEmbed()
            .setColor("#F3BB76")
            .setTitle(string)
            .setDescription(`${emojiList[randomEmoji]} ${ans[randomAns]} ${emojiList[randomEmoji]}`)
            .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    },
};
