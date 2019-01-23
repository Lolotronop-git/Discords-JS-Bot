exports.run = (client, message, args) => {
    message.channel.send('Pong!');
    delete require.cache[require.resolve(`./coms/${cmd}.js`)];
}