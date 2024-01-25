const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stick')
		.setDescription('Stick moment.'),
	async execute(interaction) {
		await interaction.reply({ files: ['assets/stick.png'] });
	},
};