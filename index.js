
import http from "http"
import * as abj from "./temp.js"
import fs from "fs"
fs.readFile()
console.log(abj.am2)
const server = http.createServer((req,res)=>{
    // console.log("servered");
    // res.end("<h1>out</h1>")
    if(req.url === "/about"){
        res.end("<h1>about page</h1>")
    }
    else if(req.url === "/products"){
        res.end("<h1>products page</h1>")
    }
    else if(req.url === "/contact"){
        res.end("<h1>contact page</h1>")
    }
   else if(req.url === "/home"){
        res.end("<h1>home page</h1>")
    }
    else{
        res.end("page not found 404")
    }
  
})
server.listen(3000,()=>{
    console.log("server is working")
})