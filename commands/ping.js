const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Starts pinging somebody!')
		.addUserOption(option =>
            option.setName("person")
                .setDescription(" The person's tag")
                .setRequired(true)
        ),
	async execute(interaction) {
		let user = interaction.options.getUser('person');

		await interaction.reply({content : `Ping on **${user.tag}** started!`, ephemeral: true});
		console.log(`Started pinging on: ${user.tag}!`)

		interval = setInterval(async () => {

			let pingChannel = interaction.channel;
			try {
				pingChannel.send(`<@${user.id}>`);
			} catch (error) {
				await interaction.reply('The ping channel is invalid!')
			}
			
		}, 1000);
	},
};