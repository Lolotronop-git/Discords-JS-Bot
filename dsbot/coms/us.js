exports.run = (client, message, args, cmd) => {
    const fs = require('fs');
    var users = JSON.parse(fs.readFileSync('D:/dsbot/users.json'));
    console.log(users);
}