const mongoose = require("mongoose");

const userSchema ={
    userName:String,
    password:String,
    gender:String,
    motto:String,
    //Date of Birth
    DOB:String,
    portrait:String,
    vipStatus:Boolean,
    myVideo:Object,
    myFavorite:Object,
    following:Object,
    follower:Object,
    watchHistory:Object
}


const userInfo = mongoose.model("userinfo",userSchema);

module.exports = userInfo;