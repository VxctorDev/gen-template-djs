const Discord = require('discord.js');
module.exports = {
    name: 'latency',
    description: 'Veja minha latência.',
    type: Discord.ApplicationCommandType.ChatInput,
    run: async(client, interaction) => {
        let iPing = client.ws.ping;
        interaction.reply({
            content: `📌 | Minha latência e de \`${iPing}\`ms!`,
        })
    }
}