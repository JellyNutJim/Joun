const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responds with latency.'),
	async execute(interaction) {
		await interaction.reply('Latency is: ' + (Math.abs(interaction.createdTimestamp - Date.now())) + 'ms.');
	},
};