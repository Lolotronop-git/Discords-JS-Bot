exports.run = (client, message, args, cmd) => {
    message.channel.send('Число: ' + new Number((Math.floor(Math.random() * args[0])) + 1));
}