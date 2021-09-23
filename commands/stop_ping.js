const { SlashCommandBuilder } = require('@discordjs/builders');

require('./ping.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stops the ping.'),
        async execute(interaction) {
            if (typeof interval === 'undefined') {
                await interaction.reply({content:'Nobody is currently being pinged!', ephemeral: true});
            } else {
                await interaction.reply({content: `Stopping pinging!`, ephemeral: true});
                await clearInterval(interval);
            }
            
        }
}