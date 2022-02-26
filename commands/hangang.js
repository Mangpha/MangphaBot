const axios = require("axios");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("한강").setDescription("한강 물 온도 확인"),
    async execute(interaction) {
        const res = await axios.get("https://api.hangang.msub.kr");
        const embed = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("한강 물 온도")
            .setAuthor({ name: "Mangpha Bot" })
            .setDescription(`현재 온도는 ${res.data.temp}도 입니다.`)
            .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    },
};
