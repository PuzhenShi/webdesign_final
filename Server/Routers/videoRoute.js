const express = require("express");
const router = express.Router();
const VideoDb = require("../Models/videoModel");
const ObjectId = require("mongodb").ObjectId;

//create a new video
router.route("/create").post((req, res)  =>{
    const videoAddress = req.body.videoAddress
    const videoName = req.body.videoName;
    const videoCover = req.body.videoCover;
    const publisher = req.body.publisher;
    var date = new Date();

    const uploadTime = date.toLocaleDateString();
    console.log(date.toLocaleDateString());
    const thumbup = 0;
    const NOC = 0;
    const videoDuration = req.body.videoDuration;
    const VIP = req.body.VIP;
    let comment = [/* {
        userName: req.body.userName,
        commentText: req.body.commentText,
        time: req.body.time
    } */];
    const newVideo = new VideoDb({
        videoAddress,
        videoName,
        videoCover,
        uploadTime,
        thumbup,
        NOC,
        videoDuration,
        VIP,
        comment,
        publisher
    });
    newVideo.save(function(err,newVide) {
        if(err)
            res.send(err)
        res.json(newVide);
        res.status(200);
    });
});

//delete a video
router.route("/delete").post((req,res) =>{
    const id = req.body._id;
    VideoDb.remove({"_id":ObjectId(id)},function (err, samples){
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    });
});

//click the video
router.route("/click").post((req,res) =>{
    //console.log(req.body);
    const videoAddress = req.body.videoAddress;
    
    VideoDb.findOne({videoAddress: videoAddress},function(err,samples){
        const NOC = samples.NOC;
        
        VideoDb.update({videoAddress:videoAddress},{
            $set: {
                NOC:NOC+1
            }
        },function(err,samples){
            if(err) res.send(err);
            res.status(200);
            res.json(samples);
        })
    })
});

//watch the video
router.route("/watch").post((req,res) =>{
    const videoAddress = req.body.videoAddress;
    VideoDb.findOne({videoAddress:videoAddress},function(err,samples){
        if(err) res.send(err);
        res.status(200);
        res.json(samples);
    })
})

//like the video
router.route("/like").post((req,res) =>{
    const videoAddress = req.body.videoAddress;
    
    VideoDb.findOne({videoAddress: videoAddress},function(err,samples){
        const thumbup = samples.thumbup;
        
        VideoDb.update({videoAddress:videoAddress},{
            $set: {
                thumbup:thumbup+1
            }
        },function(err,samples){
            if(err) res.send(err);
            res.status(200);
            res.json(samples);
        })
    })
});

// //thumbup the comment
// router.route("/thumbupComment").post((req, res)  =>{
//     VideoDb.update({videoName: req.body.videoName}, {
//         $set: {
//             comment: req.body.comment
//         }
//     }, function (err, samples) {
//         if (err)
//             res.send(err);
//         res.status(200);
//         res.json(samples);
//     })
// });

// //thumdown the comment
// router.route("/thumbdownComment").post((req, res)  =>{
//     VideoDb.update({videoName: req.body.videoName}, {
//         $set: {
//             comment: req.body.comment
//         }
//     }, function (err, samples) {
//         if (err)
//             res.send(err);
//         res.status(200);
//         res.json(samples);
//     })
// });

//add a comment
router.route("/addComment").post((req, res)  =>{
    VideoDb.update({videoName: req.body.videoName}, {
        $push: {
            comment: {
                userName: req.body.userName,
                commentText: req.body.commentText,
                time: new Date().toLocaleDateString(),
            }
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        console.log("add comment");
        res.json(samples);
    })
});

//display comments when open the video
router.route("/comments").get((req, res) => {
    VideoDb.findOne({videoName: req.body.videoName})
        .then(findcomments => res.json(findcomments))
});

//display all video
router.route("/videos").get((req, res) => {
    VideoDb.find()
        .then(findvideo => res.json(findvideo))
});

//search video by name
router.route("/searchVideo").post((req,res) =>{
    VideoDb.findOne({videoName: req.body.videoName})
        .then(findTheVideo => res.json(findTheVideo))
});

module.exports = router;
