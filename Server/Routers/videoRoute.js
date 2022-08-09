const express = require("express");
const router = express.Router();
const VideoDb = require("../Models/videoModel");

//create a new video
router.route("/create").post((req, res)  =>{
    const videoAddress = req.body.videoAddress
    const videoName = req.body.videoName;
    const videoCover = req.body.videoCover;
    const publisher = req.body.publisher;
    var date = new Date();

    const uploadTime = date;
    console.log(date.toLocaleDateString());
    const thumbup = 0;
    const NOC = 0;
    const videoDuration = req.body.videoDuration;
    const VIP = req.body.VIP;
    let comment = [/* {
        userName: req.body.userName,
        commentText: req.body.commentText,
        thumbupUsers: [],
        thumbdownUsers: [],
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
    newVideo.save();
});

//thumbup the comment
router.route("/thumbupComment").post((req, res)  =>{
    VideoDb.update({videoName: req.body.videoName}, {
        $set: {
            comment: req.body.comment
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//thumdown the comment
router.route("/thumbdownComment").post((req, res)  =>{
    VideoDb.update({videoName: req.body.videoName}, {
        $set: {
            comment: req.body.comment
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//add a comment
router.route("/addComment").post((req, res)  =>{
    VideoDb.update({videoName: req.body.videoName}, {
        $push: {
            comment: {
                userName: req.body.userName,
                commentText: req.body.commentText,
                thumbupUsers: [],
                thumbdownUsers: [],
                time: req.body.time
            }
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//display comments when open the video
router.route("/comments").get((req, res) => {
    VideoDb.findOne({videoName: req.body.videoName})
        .then(findcomments => res.json(findcomments))
});

router.route("/videos").get((req, res) => {
    VideoDb.find()
        .then(findvideo => res.json(findvideo))

});

module.exports = router;