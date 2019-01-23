exports.run = (client, message, args, cmd) => {
        try{
            console.log(args[0].toString().substr(2, -1));
        }catch(e){
            console.log(e.stack);
            console.log('args: ' + args);
        }
    message.channel.send(message.author.avatarURL);
    message.channel.send('<@' + message.author.id.toString() + '>')
    delete require.cache[require.resolve(`./coms/${cmd}.js`)];
}