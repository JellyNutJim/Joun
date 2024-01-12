const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responds with latency on reply. (Not API latency)'),
	async execute(interaction) {
		await interaction.reply('Latency is: ' + (interaction.createdTimestamp - Date.now()) + 'ms.');
	},
};