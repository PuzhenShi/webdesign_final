const mongoose = require("mongoose");

const videoSchema ={
    videoID:Number,
    videoAddress:String,
    videoName:String,
    videoCover:String,
    uploadTime:String,
    thumbup:Number,
    publisher:String,
    //Number of Clicks
    NOC:Number,
    videoDuration:String,
    VIP:Boolean,
    comment:Object
}


const Video = mongoose.model("videoinfo",videoSchema);

module.exports = Video;