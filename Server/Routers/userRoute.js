const express = require("express");
const router = express.Router();
const user = require("../Models/userModel");
const bcrypt = require('bcryptjs');

router.route("/create").post((req, res) => {
    const userName = req.body.userName;
    const password = bcrypt.hashSync(req.body.password,10);
    const gender = req.body.gender;
    const motto = req.body.motto;
    const DOB = req.body.DOB;
    const portrait = req.body.portrait;
    const vipStatus = req.body.vipStatus;
    const myVideo = req.body.myVideo;
    const myFavorite = req.body.myFavorite;
    const following = req.body.following;
    const follower = req.body.follower;
    const watchHistory = req.body.watchHistory;
    console.log(">>> g: ", req.body);
    const newUser = new user({
        userName,
        password,
        gender,
        motto,
        DOB,
        portrait,
        vipStatus,
        myVideo,
        myFavorite,
        following,
        follower,
        watchHistory
    });
    console.log(">>> e: ", newUser);
    newUser.save();
});

//update User Personal Info
router.route("/update").post((req, res)  =>{
    user.update({userName: req.body.oldUserName}, {
        $set: {
            userName: req.body.userName,
            password: bcrypt.hashSync(req.body.password,10),
            gender: req.body.gender,
            motto: req.body.motto,
            DOB: req.body.DOB,
            portrait: req.body.portrait
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update My Vip Status
//need payment API to finish this function

//update My Video List
router.route("/myVideo").post((req,res) =>{
    user.update({userName: req.body.userName}, {
        $set: {
            myVideo: req.body.myVideo
        }
    },function (err, samples){
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update My Favorite
router.route("/myFavorite").post((req,res) =>{
    user.update({userName: req.body.userName}, {
        $set: {
            myFavorite: req.body.myFavorite
        }
    },function (err, samples){
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update My Following People
router.route("/following").post((req,res) =>{
    user.update({userName: req.body.userName}, {
        $set: {
            following: req.body.following
        }
    },function (err, samples){
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update My Followers
router.route("/followers").post((req,res) =>{
    user.update({userName: req.body.userName}, {
        $set: {
            followers: req.body.followers
        }
    },function (err, samples){
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update My Watching History
router.route("/watchHistory").post((req, res)  =>{
    user.update({userName: req.body.userName}, {
        $set: {
            watchHistory: req.body.watchHistory
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

router.route("/users").get((req, res) => {
    user.find()
        .then(findUsers => res.json(findUsers))
});

module.exports = router;