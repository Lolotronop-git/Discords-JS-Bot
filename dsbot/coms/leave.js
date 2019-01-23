exports.run = (client, message, args, cmd) => {
    message.member.voiceChannel.leave();
}