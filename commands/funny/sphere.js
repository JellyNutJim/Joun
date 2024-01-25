const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sphere')
		.setDescription('Hughmungus.'),
	async execute(interaction) {
		await interaction.reply({ files: ['assets/stick.png'] });
	},
};