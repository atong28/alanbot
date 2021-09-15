const { SlashCommandBuilder } = require('@discordjs/builders');

require('./ping.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stops the ping.'),
        async execute(interaction) {
            await interaction.reply(`Stopping pinging!`);
            await clearInterval(interval);
        }
}