const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("팔찌").setDescription("팔찌 시뮬레이터"),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("#0c0c0c")
            .setTitle("팔찌 시뮬레이터")
            .setAuthor({ name: "Mangpha Bot" })
            .setDescription(`<@${interaction.user.id}>`)
            .addFields(
                { name: "\u200B", value: "\u200B" },
                { name: "옵션1", value: "option test 1" },
                { name: "옵션2", value: "option test 2" },
                { name: "옵션3", value: "options test 3" },
            );
        await interaction.reply({ embeds: [embed] });
    },
};
