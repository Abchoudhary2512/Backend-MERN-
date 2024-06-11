// // const x ="1";
// // const y = "2";
// // console.log(x,y);

// // // %s fomat varible to String
// // console.log("I am %s and my age is %d",'ajay',12) // format specifiers
// // console.clear(); // clearing the console
// // console.count("i am eth");
// // console.count("i am eth");
// // console.count("i am eth");
// // console.count("i am eth2");

// // //reset the count
// // console.countReset("i am eth");

// //help in debugging
// // const function1 = () =>{ console.trace()};
// // const function2 = ()=>{function1()};

// // function2();

// const sum = ()=>{
//     console.log(`the sum is ${2+3}`);
// }


// const mul = ()=>{
//     console.log(`the mul is ${2*3}`);
// }

// const measureTime = ()=>{
//     console.time('sum()');
//     sum();
//     console.timeEnd('sum()');
//     console.time('mul()');
//     mul();
//     console.timeEnd('mul()');
// }
// measureTime();

// //progress bar
//npm i progress for the bar
// npm i chalk for the change in color
// const progressBar = require("progress");
// const bar = new ProgressBar("downloading {")
const fs = require('fs');
const path = require('path');
const cliProgress = require('cli-progress');

// Set up progress bar
const totalSteps = 100;
const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// Log file path
const logFile = path.join(__dirname, 'progress.log');

// Clear previous log file
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

function logProgress(step) {
  fs.writeFileSync(logFile, `${step}\n`, { flag: 'a' });
}

async function performTask() {
  progressBar.start(totalSteps, 0);
  
  for (let step = 1; step <= totalSteps; step++) {
    logProgress(step);
    progressBar.update(step);
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate work with a delay
  }

  progressBar.stop();
  console.log('Task completed');
}

performTask();
