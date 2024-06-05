const express = require("express"); // efficient code in nodejs
const mongoose = require("mongoose"); // connection between database(mongodb) and app
const bodyParser = require("body-parser"); // converting data to the readable format
const dotenv = require("dotenv"); // for storing the pass and all

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.61rkb6h.mongodb.net/registrationFormDb`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//registration schema
const registrationSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String
})

//model for the scehema
const Registration = mongoose.model("Registration",registrationSchema);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());






//get request
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});
//post request
app.post("/register",async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const registrationData = new Registration({
        name,
        email,
        password
    });
    await registrationData.save();
    res.redirect("/success")

  } catch(error) {
    console.log(error);
    res.redirect("/error")
  }
});


app.get("/success",(req,res)=>{
    res.sendFile(__dirname +"/pages/success.html");
})

app.get("/error",(req,res)=>{
    res.sendFile(__dirname +"/pages/error.html");
})




app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
