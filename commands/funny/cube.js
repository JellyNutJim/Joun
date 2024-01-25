const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cube')
		.setDescription('The one who cuboids.'),
	async execute(interaction) {
		await interaction.reply({ files: ['assets/jake_cube.gif'] });
	},
};