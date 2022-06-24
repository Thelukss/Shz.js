const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTg5NzA0Njc2NDE5MjAzMTMy.G270Gw.sEsxWvlmNW1qbcjHRyNdPfzMXBdY5JseoKNQKM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`El bot ${client.user.tag} se a conectado!`)
})

client.on("messageCreate", (message) => {
    if (message.content == "*hi") {
        message.reply("Hola Server!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "*help") {
        message.reply("En mantenimiento, muy pronto saldran los comandos!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "*Youtube") {
        message.reply("Si nuevo canal, (Krastsz) url (https://www.youtube.com/channel/UCl8X7Odsd6rxxdBT-60GhTg) Descripcion: Es un canal vasado en ukulele musicas cristias covers y mas! @everyone")
    }
})

client.login(process.env.TOKEN)