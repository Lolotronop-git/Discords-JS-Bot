exports.run = (client, message, args) => {
    message.channel.send(eval(args[0]));
    delete require.cache[require.resolve(`./coms/${cmd}.js`)];
}