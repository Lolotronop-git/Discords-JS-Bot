var di = require('dependency-install');
/* Executes npm install for all the nested pacakge.json files inside "<your-directory>" */
di.install(["D:/dsbot"], function() {
    // Things to do after dependency installation completes.
    console.log('done!');
});