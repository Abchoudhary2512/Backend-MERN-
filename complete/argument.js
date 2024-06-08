// console.log(process.argv.slice(2)[0]);  give the the argument in console which i pass from the console 

//give the index wise things 
// process.argv.forEach((val,index)=>{
// //     console.log(`${index}:${val}`);
// // })
const minimist = require("minimist")

//use of minimist
// give -- to the key so you can get the things which you want to extract
const ab = minimist(process.argv.slice(2));
console.log(ab.name); // command { node argument.js --name= ajay  }
// gives the output of ajay
