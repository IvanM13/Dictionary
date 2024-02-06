const fs = require('fs');
const readline = require('readline');
const data = JSON.parse(fs.readFileSync("english.json", "utf8"));


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let realDict = {
    word: "",
    expression: []
}

rl.question('Enter a new word: ', (answer) => {

    realDict.word = answer;

    rl.setPrompt(`what is the expression with the word "${realDict.word}": `);

    rl.prompt();
    
    rl.on('line', (s)=>{

        realDict.expression.push(s.trim());

        if (s.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What other expression or translation would you like to write down for this word "${realDict.word}?" `);

            rl.prompt();
        }


    });
});


rl.on('close', () =>{

    console.log("%s for this word, the expression %j", realDict.word, realDict.expression);
    data.push(realDict);
    fs.writeFileSync("english.json", JSON.stringify(data, null, 4));

    console.log(data);
    process.exit();
});
