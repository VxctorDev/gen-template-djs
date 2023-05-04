module.exports = {
    name: 'latencia',
    aliases: ['ltc'],
    run: async(client, message, args) => {
        let iPing = client.ws.ping;
        message.reply({
            content: `📌 | Minha latência e de \`${iPing}\`ms!`
        })
    }
}