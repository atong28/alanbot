const { SlashCommandBuilder } = require('@discordjs/builders');

require('./ping.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stops the ping.'),
        async execute(interaction) {
            if (typeof interval === 'undefined') {
                await interaction.reply('Nobody is currently being pinged!');
            } else {
                await interaction.reply(`Stopping pinging!`);
                await clearInterval(interval);
            }
            
        }
}