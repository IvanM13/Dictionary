const { spawn } = require('child_process');
const nodeCommand = spawn('./a.out');

nodeCommand.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

nodeCommand.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

nodeCommand.on('close', (code) => {
  if (code !== 0) {
    console.error(`Execution failed with code ${code}`);
  }
});

// const childProcess = require('child_process');

// function execProcess(command, args) {
    
//     childProcess.exec(command, args, function(error, stdout, stderr){

//         console.log(`stdout: ${stdout} `);
//         console.log(`stderr: ${stderr} `);

//         if(error !== null) {
//             console.log(`error: ${error}`)
//         }
//     });
// }

// // execProcess('php -S localhost:4000');

// function spawnProcess(command, args) {
    
//     const s_process = childProcess.spawn(command, args);
//     let fullData = '';
//     let dataChunks = 0;

//     s_process.stderr.on('data', (data) =>{
//         console.log(`stderr: ${data} `);
//     });

//     s_process.stdout.on('data', function(data){
//         fullData += data;
//         dataChunks += 1;
//         console.log(`stdout: ${data} `);
//     });

//     s_process.stdout.on('end', function(){
//         console.log(`end: ${fullData}`);
//         console.log(`chunks: ${dataChunks}`);
//     });

//     s_process.on('close', (code)=>{
//         console.log(`child process exited with code: ${code}`);
//     });


// }

// spawnProcess('php', ['-v']);