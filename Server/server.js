const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


//connect to mongoose
mongoose.connect("mongodb+srv://Team2:team2Final@info6150-final.bnqj3iv.mongodb.net/?retryWrites=true&w=majority");

//require routes
app.use("/users/", require("./Routers/userRoute"));
app.use("/videodb/", require("./Routers/videoRoute"));

app.listen(3001, function(){
    console.log(">>> express is running");
});
