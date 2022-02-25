const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("test").setDescription("Testing Slash Command"),
    async execute(interaction) {
        await interaction.reply("Testing Bot");
    },
};
