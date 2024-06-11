//readline is used to read from console
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
// rl.question("kuch toh bol??",(name)=>{
//     console.log(`Hi ${name}`);
//     rl.close();
// })
//prompt sync is used to eleiminate the callback funcitn

const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);
