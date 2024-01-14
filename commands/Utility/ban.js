const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ratio')
		.setDescription('1/1000 Chance of banning someone (69 = ban)')
        .setDMPermission(false)
        .addUserOption(option =>
            option.setName('Target')
                .setDescription('Ratio Target')
                .setRequired(true)),
	async execute(interaction) {
        const target = interaction.options.getUser('target');
        const r = Math.floor(Math.random * 1000);
        if (r == 69){
            await interaction.reply('Banned: ' + r);
            await interaction.guild.members.ban(target);
        }
        else{
            await interaction.reply('Not Banned: ' + r);
        }
	},
};