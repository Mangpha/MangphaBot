const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

const classes = {
    버서커: "없음",
    인파이터: "상시 받는 피해 증가 6%",
    호크아이: "상시 받는 피해 증가 6%",
    데모닉: "순간 받는 피해 증가 12%",
    소서리스: "상시 받는 피해 증가 6%",
    디스트로이어: "순간 방어력 감소 24%",
    워로드: "상시 방어력 감소 12% / 순간 백-헤드어택 데미지 증가 12% / 정화",
    블래스터: "상시 방어력 감소 12%",
    서머너: "순간 방어력 감소 24% / 정화",
    배틀마스터: "순간 치명타 적중률 18%",
    창술사: "순간 치명타 적중률 18%",
    스트라이커: "순간 치명타 적중률 18%",
    데빌헌터: "상시 치명타 적중률 10%",
    건슬링어: "상시 치명타 적중률 10%",
    아르카나: "상시 치명타 적중률 10%",
    블레이드: "상시 백-헤드어택 데미지 증가 12%",
    리퍼: "상시 치명타 피해 증가 20%",
    기공사: "상시 공격력 증가 6% / 정화",
    스카우터: "상시 공격력 증가 6%",
    바드: "서포터",
    홀리나이트: "서포터 / 정화",
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("시너지")
        .setDescription("시너지 검색")
        .addStringOption((option) =>
            option.setName("직업").setDescription("직업 입력").setRequired(true),
        ),
    async execute(interaction) {
        const userClass = interaction.options.getString("직업");
        const embed = new MessageEmbed()
            .setColor("AQUA")
            .setTitle("로스트아크 시너지 검색")
            .setAuthor({ name: "Mangpha Bot" })
            .addField(
                classes[userClass] ? userClass : "Error",
                classes[userClass] ? classes[userClass] : "Error",
            );
        await interaction.reply({ embeds: [embed] });
    },
};
