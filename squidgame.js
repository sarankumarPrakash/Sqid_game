const readline = require("readline");
const { exec } = require('child_process');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 1;


console.log(`
    ____   ___  _   _ ___ ____     ____    _    __  __ _____ 
   / ___| / _ \\| | | |_ _|  _ \\   / ___|  / \\  |  \\/  | ____|
   \\___ \\| | | | | | || || | | | | |  _  / _ \\ | |\\/| |  _|  
    ___) | |_| | |_| || || |_| | | |_| |/ ___ \\| |  | | |___ 
   |____/ \\__\\_\\\\___/|___|____/   \\____/_/   \\_\\_|  |_|_____| 

                🧑🏿‍💻 Coded by - sarankumar prakash
                ☣️ Warning - Play at your own risk 
                🐣 Only for educational purpose 
   `);
   

console.log("🎯 Guess a number between 1 and 100! .It's Do or Die ");


const askQuestion = () => {
    if (attempts === 0) {
        console.log(`❌ Out of attempts! `);
        exec('hello', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`STDERR: ${stderr}`);
                return;
            }
            console.log(`STDOUT: ${stdout}`);
        });


        return;
    }
   

   
};

rl.question(` Enter your guess: `, (input) => {
    const guess = parseInt(input);
    if (isNaN(guess)) {
        console.log("❌ Please enter a valid number.");
    } else if (guess > secretNumber) {
        console.log("📈 Nahh nahh Too high!");
    } else if (guess < secretNumber) {
        console.log("📉 Hahahaa  Too low!");
    } else {
        console.log(`🎉 Correct! Shall we play once more 🕜... `);
        rl.close();
        return;
    }

    attempts--;
    askQuestion();
});

askQuestion();
