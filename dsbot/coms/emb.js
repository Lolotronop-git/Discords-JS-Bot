exports.run = (client, message, args, cmd) => {
    const Discord = require('discord.js');
    var hellochan = message.guild.channels.find(ch => ch.name === '🏷кпп');
    var helloembed = new Discord.RichEmbed;
    var answer = "`{user} установил соединие с l0lo.server` \n ./>>выать \"пользователь\" {user} \n  `выдан статус \"пользователь\"` \n ./>>открыть привет.txt \n   \```Привет, новенький! Для начала прочитай все, что написано в /автоматика/правила.txt, а потом можешь задать вопросы администрации. Удачного освоения на сервере!\```";
    answer.replace("{user}", new String("<@" + message.author.id + ">"));
    helloembed.addField('/автоматика/скрытое/привет-робот.js', answer);
    helloembed.setFooter(new Date());
    helloembed.setColor('#00FF00');
    hellochan.send(helloembed);
}