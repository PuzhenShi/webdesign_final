
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import Button from 'react-bootstrap/Button';
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import swal from "sweetalert";

function Upload() {

    //get current user
  let loginCookie = getCookieValue("loginType");
  // console.log("loginCookie",loginCookie);
  const [loginType, setLoginType] = useState(
    loginCookie === null ? 0 : parseInt(loginCookie)
  );
  if (loginCookie === null) {
    loginCookie = setCookie("loginType", 0, "", "");
  }
  //console.log("loginType",loginType);
  const [users, setUsers] = useState([
    {
      _id: Object,
      userName: "",
    },
  ]);

  // set currentUser
  let getCurrentUser = (currentUserID) => {
    if (currentUserID == "") {
      return {
        _id: Object,
        userName: "",
      };
    }
    // these code will cause re-peat wrong
    // let userSave = users.find((item) => {
    //     if (item._id == currentUserID) {
    //         setInfoUserName(item.userName);
    //         setInfoUserPwd(item.password);
    //         return item;
    //     }
    // });
    // console.log('userSave',userSave);
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id == currentUserID) {
        // setInfoUserName(users[i].userName);
        // setInfoUserPwd(users[i].password);

        return users[i];
      }
    }
    return {
      _id: Object,
      userName: "",
    };
  };
  let userFind = getCurrentUser(getCookieValue("currentUserID"));

  //  console.log('userFind',userFind);
  const [currentUser, setCurrentUser] = useState(userFind);
  //console.log('currentUser',currentUser);
  //

  useEffect(() => {
    fetch("http://localhost:3001/users/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        setUsers(res);
        //console.log("res",res);
      });
    //console.log(loginType);

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }
    
  }, [loginType]);


    //***************************************
    //script for image upload
    // const [images, setImages] = React.useState([]);
    // //max number of images you can upload? not sure
    // const maxNumber = 1;
    // const onChange = (imageList, addUpdateIndex) => {
    //     // data for submit
    //     console.log(imageList, addUpdateIndex);
    //     setImages(imageList);
    // };
    //const [file, setFile] = React.useState("");
    const [files, setFiles] = React.useState([]);
    const [cover,setCover] = useState()
    // Handles file upload event and updates state
    function onCoverUpload(event) {
        event.preventDefault();
        // Get the file Id
        let id = event.target.id;
        // Create an instance of FileReader API
        let file_reader = new FileReader();
        // Get the actual file itself
        let file = event.target.files[0];
        file_reader.onload = () => {
            // After uploading the file
            // appending the file to our state array
            // set the object keys and values accordingly
            setFiles([...files, { file_id: id, uploaded_file: file_reader.result, file_name: file.name }]);
        };
        // reading the actual uploaded file
        file_reader.readAsDataURL(file);
        console.log(`Selected file - ${event.target.files[0].name}`);
        setCover(event.target.files[0].name)
    }


    const [videoAddress,setvideoAddress] = useState()
    // Handles file upload event and updates state
    function onvideoUpload(event) {
        event.preventDefault();
        // Get the file Id
        let id = event.target.id;
        // Create an instance of FileReader API
        let file_reader = new FileReader();
        // Get the actual file itself
        let file = event.target.files[0];
        file_reader.onload = () => {
            // After uploading the file
            // appending the file to our state array
            // set the object keys and values accordingly
            setFiles([...files, { file_id: id, uploaded_file: file_reader.result, file_name: file.name }]);
        };
        // reading the actual uploaded file
        file_reader.readAsDataURL(file);
        console.log(`Selected file - ${event.target.files[0].name}`);
        setvideoAddress(event.target.files[0].name)
    }

    const[videoname,setVideoname] = useState();
    let videonameinput = (e) => {
        setVideoname(e.target.value);
        console.log("UserName Input", e.target.value);
      };

    const[duration,setDuration] = useState();
      let videodurationinput = (e) => {
        setDuration(e.target.value);
          console.log("UserName Input", e.target.value);
        };

    const[vip,setVip] = useState(); 
    let changevip = (e) => {
        setVip(e.target.value);
          console.log("UserName Input", e.target.value);
        };


    //***************************************
    //***************************************
    //script for file uplaod
    //the only thing we need to know is the file name
    
    // handle submit button for form
    const[newvideo,setNewvideo] =useState();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(videoAddress.split('.').slice(0, -1).join('.'));
        console.log(cover);
        console.log(videoname);
        console.log(userFind.userName);
        console.log(duration);
        console.log(vip);

        fetch("http://localhost:3001/videodb/create", {
            method: "POST",
             mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                videoAddress: videoAddress.split('.').slice(0, -1).join('.'),
                videoName: videoname,
                videoCover: cover,
                publisher: userFind.userName,
                videoDuration: duration,
                VIP: vip
      }),
    }).then((res) =>{
      return res.json();
    }).then((res) =>{
      setNewvideo(res);
    })
    swal({
        title: "Thanks!",
        text: "Welcome to dilidili!",
        icon: "success",
      });

      fetch("http://localhost:3001/users/myVideo", {
            method: "POST",
             mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                myVideo: newvideo,
                userName: userFind.userName,
      }),
    })

    }
    
    // button state whether it's disabled or enabled
    const [enabled, setEnabled] = useState(false);
    // using useEffect we can detect if user uploaded any file,
    // so enable submit button
    useEffect(() => {
        if (files.length === 0) {
            setEnabled(false);
        } else {
            setEnabled(true);
        }
    }, [files]);

    //***************************************

    return (
        <div class="container">

            <form onSubmit={handleSubmit} className="upload--container">
                <h4> Upload your video </h4>
                <div class="col-10 row">
                    <div class="col-5">
                        <p>choose the cover of your video:</p>
                        <div className="upload--button">
                            <input
                                onChange={onCoverUpload}
                                id={1}
                                accept=".jpeg, .jpg, .png"
                                type="file"
                            />
                        </div>

                        {/* <p>cover file: 
                            {files[0].file_name}
                            </p> */}
                    </div>
                    <div class="col-5">
                        <p>choose your video:</p>
                        <div className="upload--button">
                            <input
                                onChange={onvideoUpload}
                                id={2}
                                accept=".mp4, .mkv"
                                type="file"
                            />
                        </div>
                        {/* <p>video: 
                            {files[1].file_name}
                            </p> */}
                    </div>
                    <div class="col-5 title">
                        <span>video title:</span>
                        <input type="text" id="videoTitle" value={videoname}
                          onChange={videonameinput}
                          required/>
                    </div>
                    <div class="col-5 title">
                        <span>video duration:</span>
                        <input type="text" id="videoTitle" value={duration}
                          onChange={videodurationinput}
                          required/>
                    </div>
                    <div class="col-5 title">
                        <span>vip?</span>
                    <div onChange={changevip}>
                        <input type="radio" value="true" name="yes" /> Yes
                        <input type="radio" value="false" name="vip" /> No
                    </div>
                    </div>
                    
                </div>
                <br />
                {enabled ? (
                    <button type="submit">Submit</button>
                ) : (
                    <button disabled type="submit">
                        Submit
                    </button>
                )}
            </form>


        </div>
    )
}
/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};
export default Upload