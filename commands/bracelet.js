const axios = require("axios");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("팔찌").setDescription("팔찌 시뮬레이터"),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("#0c0c0c")
            .setTitle("")
            .setAuthor({ name: "Mangpha Bot" });
        await interaction.reply({ embeds: embed });
    },
};
