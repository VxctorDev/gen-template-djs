const Discord = require('discord.js');
module.exports = {
    name: 'test', // -> Nome do comando.
    description: 'testing', // -> Descrição do Comando.
    type: Discord.ApplicationCommandType.ChatInput,
    run: async(client, interaction) => {
            // Codigo aqui.
    }
}