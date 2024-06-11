//read evaluate print loop
const repl = require("repl");
const local = repl.start();

//on exit of the console

local.on('exit',()=>{
    console.log("exiting repl");
    process.exit();
})

