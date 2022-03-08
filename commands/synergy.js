const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("시너지").setDescription("시너지 검색"),
    async execute(interaction) {
        const embed = new MessageEmbed();
        await interaction.reply({ embeds: [embed] });
    },
};
