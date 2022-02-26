const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Testing")
    .setAuthor({ name: "Mangpha Bot" })
    .setDescription("Testing Embed Message")
    .setTimestamp();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Testing Slash Command")
        .addStringOption((option) =>
            option.setName("input").setDescription("The input to echo back").setRequired(true),
        ),
    async execute(interaction) {
        await interaction.reply({ embeds: [embed] });
    },
};
