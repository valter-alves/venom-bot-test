const venom = require('venom-bot');
const db = require("./helpers/mysql");

venom
    .create({
        session: 'bot-zdg',
        multidevice: false,
        headless: false
    })
    .then((client)=> start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client){
    console.log('Iniciando o BOT...');
    client.onMessage(async (msg) => {
        try {
            const user = msg.from.replace(/\D/g, '');
            const getUserFrom = await db.getUser(user);
            const keyword = msg.body
        }
    })
}