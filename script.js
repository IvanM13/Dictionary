// const { spawn } = require('child_process');
// const nodeCommand = spawn('node', [' /Documents/JavaScript/Projects/Dictionary/dict.js']);

// nodeCommand.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// nodeCommand.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// nodeCommand.on('close', (code) => {
//   if (code !== 0) {
//     console.error(`Execution failed with code ${code}`);
//   }
// });

const childProcess = require('child_process');

function execProcess(command, args) {
    
    childProcess.exec(command, args, function(error, stdout, stderr){

        console.log(`stdout: ${stdout} `);
        console.log(`stderr: ${stderr} `);

        if(error !== null) {
            console.log(`error: ${error}`);
        }
    });
}

execProcess('php -S localhost:4000');