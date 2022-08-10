const express = require("express");
const router = express.Router();
const user = require("../Models/userModel");
const bcrypt = require('bcryptjs');

router.route("/create").post((req, res) => {
    const userName = req.body.userName;
    const password = bcrypt.hashSync(req.body.password,10);
    const gender = req.body.gender;
    const DOB = req.body.DOB;
    const email = req.body.email;
    const motto = "nothing";
    const vipStatus = false;
    const portrait = "head/default.jpg";
    const myVideo = [];
    const myFavorite = [];
    const following = [];
    const follower = [];
    const watchHistory = [];
    console.log(">>> g: ", req.body);
    const newUser = new user({
        userName,
        password,
        gender,
        DOB,
        email,
        motto,
        vipStatus,
        portrait,
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
            DOB: req.body.DOB
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update User Personal Portrait
router.route("/myPortrait").post((req,res) =>{
    user.update({userName: req.body.userName}, {
        $set: {
            portrait: req.body.portrait
        }
    },function (err, samples){
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update My Vip Status
router.route("/updateVIP").post((req,res) =>{
    user.update({userName: req.body.userName}, {
        $set: {
            vipStatus:req.body.vipStatus
        }
    },function (err, samples){
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//update My Video List
router.route("/myVideo").post((req,res) =>{
    user.update({userName: req.body.userName}, {
        $push: {
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
        $push: {
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
        $push: {
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
        $push: {
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
        $push: {
            watchHistory: req.body.watchHistory
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

//login into website
router.route("/login").post((req,res) =>{
    var password = req.body.password;
    var result = req.body.result;
    var b = false;
    console.log(req.body);
     if(bcrypt.compareSync(password,result.password)){
            b = true;
    }
    console.log(b);          
    if(b){
        res.status(200);
        res.json(result); 
    }else{
        res.status(201);
        res.json(result); 
    }

})


//display User Personal Info

router.route("/users").get((req, res) => {
    user.find()
        .then(findUsers => res.json(findUsers))
});

//search user by name
router.route("/searchUsers").get((req, res) => {
    user.findOne({userName: req.body.userName})
        .then(findTheUser => res.json(findTheUser))
});

module.exports = router;
