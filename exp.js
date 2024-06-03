// import { name } from "ejs";
// import express from "express"
// import path from "path"
// const app = express();

// // app.use(express.static(path.join(path.resolve(),"public"))) //use is used to handle paramteres and middlewares

// // console.log(path.join(path.resolve(),"public"))

// //setting up the view engine
// app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     res.render("index")
//   // res.sendFile("index.ejs",)
// })

// app.post("/",(req,res) =>{
//     console.log(req.body.name)
// })


// app.use(express.static('public'));
// app.use(express.urlencoded({extended : true}))

// //get api endpoint


// app.listen(5000,()=>{
//     console.log("server is working")
// })

import express from "express";
import path from "path";

const app = express();

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files
app.use(express.static("public"));

// Setting up the view engine
app.set("view engine", "ejs");

// Route for GET request to the root
app.get("/", (req, res) => {
  res.render("index", { name: "ajay2512" });
});

// Route for POST request to the root
app.post("/", (req, res) => {
  console.log(req.body.name);
  res.send("POST request received");
});

// Starting the server
app.listen(5000, () => {
  console.log("server is working on port 5000");
});
