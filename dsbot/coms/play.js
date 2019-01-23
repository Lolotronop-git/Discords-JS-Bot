const yldt = require('ytdl-core');
exports.run = async (client, message, args, cmd) => {
    try{
        if(!message.member.voiceChannel) return message.channel.send('Вы не подключены к голосовому канау. Куда музыку то играть?');
        if(message.guild.me.voiceChannel) return message.channel.send('Простити, бот уже в гильдии(?!)');
        if(!args[0]) return message.channel.send('Укажите ссылку на то, что нужно играть, я не всевидящий');
        let validate = await yldt.validateURL(args[0]);
        if(!validate) return message.channel.send('Пожайлуста, дайте мне работающую ссылку на то, что нужно играть');
        let info = await yldt.getInfo(args[0]);
        //let connection = await message.member.voiceChannel.join();
        //let dispatcher = await connection.playStream(yldt(args[0], {filter : 'audioonly'}));
        let voiceConnection = message.member.voiceChannel.join()
        .then(voiceConnection => {
        const stream = ytdl(args[0], { filter : 'audioonly' });
        const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
        })
        .catch(console.error);
        message.channel.send('Сейчас играет: ${info.title}');
    }
    catch(e){
        console.log(e.stack);
    }
}