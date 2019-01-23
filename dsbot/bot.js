const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const prefix = '+';

var users = JSON.parse(fs.readFileSync('D:/dsbot/users.json'));
console.log(users);

client.on('ready', () => {
  console.log('Гатов к труду и обороне!!!!');
});

client.on('guildMemberAdd', member => {
    if (member.id in users.users) {
        
    }
    var obj = {
        id: member.id,
        username: member.username,
        dis_id: member.user.tag,
        lvl: 0,
        xp: 0
    };
    users.users.push(obj);
    fs.writeFileSync('D:/dsbot/users.json', JSON.stringify(users), null, 2);
    console.log(users);

    var hellochan = member.guild.channels.find(ch => ch.name === '🏷кпп');
    var helloembed = new Discord.RichEmbed;
    var answer = "{user} установил соединие с l0lo.server \n ./>>выать \"пользователь\" {user} \n  выдан статус \"пользователь\" \n./>>открыть привет.txt \n   \`Привет, новенький! Для начала прочитай все, что написано в /автоматика/правила.txt, а потом можешь задать вопросы администрации. Удачного освоения на сервере!\`";

    answer.replace('{user}', '<@' + member.id + '>');
    helloembed.addField('/автоматика/скрытое/привет-робот.js', answer);
    helloembed.setFooter(new Date());
    hellochan.send(helloembed);
});


client.on('message', message => {
    let args = message.content.substr(Object.keys(prefix).length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    try {
        let commandFile = require(`./coms/${cmd}.js`);
        commandFile.run(client, message, args, cmd);
    } catch(e) {
        console.log(e.stack);
        console.log('cmd: ' + cmd + ' args: ' + args);
    }
});

client.login('');
