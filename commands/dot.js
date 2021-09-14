const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dot')
		.setDescription('Finds the dot product of two vectors.')
        .addNumberOption(option =>
            option.setName("x1")
              .setDescription("The first vector's x coordinate")
              .setRequired(true)
          )
        .addNumberOption(option =>
            option.setName("y1")
              .setDescription("The first vector's y coordinate")
              .setRequired(true)
          )
        .addNumberOption(option =>
            option.setName("z1")
              .setDescription("The first vector's z coordinate")
              .setRequired(true)
          )
        .addNumberOption(option =>
            option.setName("x2")
              .setDescription("The second vector's x coordinate")
              .setRequired(true)
          )
        .addNumberOption(option =>
            option.setName("y2")
              .setDescription("The second vector's y coordinate")
              .setRequired(true)
          )
        .addNumberOption(option =>
            option.setName("z2")
              .setDescription("The second vector's z coordinate")
              .setRequired(true)
          ),
        async execute(interaction) {
            x1 = interaction.options.getNumber('x1');
            y1 = interaction.options.getNumber('y1');
            z1 = interaction.options.getNumber('z1');
            x2 = interaction.options.getNumber('x2');
            y2 = interaction.options.getNumber('y2');
            z2 = interaction.options.getNumber('z2');
            product = x1*x2 + y1*y2 + z1*z2;
		    await interaction.reply(`The dot product of (${x1}, ${y1}, ${z1}) and (${x2}, ${y2}, ${z2}) is ${product}`);
	    },
};