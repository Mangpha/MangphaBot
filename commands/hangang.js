const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("한강").setDescription("한강 물 온도 확인"),
    async execute(interaction) {
        await interaction.reply("한강 물 온도 확인 기능");
    },
};
