import React, { useState,useEffect } from 'react'
import ImageUploading from 'react-images-uploading';
import Button from 'react-bootstrap/Button';
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import axios from "axios";
import swal from "sweetalert";

function ProfileHead() {

  let loginCookie = getCookieValue("loginType");
  const [loginType, setLoginType] = useState(
    loginCookie === null ? 0 : parseInt(loginCookie)
  );
  if (loginCookie === null) {
    loginCookie = setCookie("loginType", 0, "", "");
  }
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
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id == currentUserID) {
        return users[i];
      }
    }
    return {
      _id: Object,
      userName: "",
    };
  };
  let userFind = getCurrentUser(getCookieValue("currentUserID"));

  
  const [currentUser, setCurrentUser] = useState(userFind);

  useEffect(() => {
    fetch("http://localhost:3001/users/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        setUsers(res);

      });
   // console.log(loginType);

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }
    
  }, [loginType]);

    const add="head/";
    //script for image upload
    // const [images, setImages] = React.useState([]);
    // //max number of images you can upload?
    // const maxNumber = 1;
    // const onChange = (imageList, addUpdateIndex) => {
    //     // data for submit
    //     console.log(imageList, addUpdateIndex);
    //     setImages(imageList);
    // };


    // State to store uploaded file
    const [file, setFile] = React.useState("");

    // Handles file upload event and updates state
    function handleUpload(event) {
        setFile(event.target.files[0]);


        // Add code here to upload file to server
        // ...
    }

    const upLoad=(event)=>{
        event.preventDefault();
        if(file.name===undefined)
        {
          alert("please select your file");
          return false;
        }
        else{
          let users = fetch("http://localhost:3001/users/users")
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then((users)=>{
              let flag=true;
              users.find((item)=>{
                   if(item.portrait===add+file.name){
                    flag=false;
                   }
              });
              if(flag){
              const newpicture={
                userName:userFind.userName,
                portrait:add+file.name
              };
              console.log(newpicture);
              axios.post('http://localhost:3001/users/myPortrait',newpicture);
              swal({
                title: "Thanks!",
                text: "Upload successfully",
                icon: "success",
              });}
              else{
                swal({
                  title: "Oh No!",
                  text: "select the same portrait" + 
                          "Please change to another one.",
                  icon: "error",
              });
              return false;
              }

            })
        }
    }

    return (
        <div class="col-8 ml-8 mb-8 rounded">
            <p>Upload your head sculpture:</p>

            {/* <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                        &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading> */}

            <div class="col-5">
                <div id="upload-box">
                    <input type="file" onChange={handleUpload} />
                    <p>Filename: {file.name}</p>
                    {/* <p>File type: {file.type}</p> */}
                    {/* <p>File size: {file.size} bytes</p> */}
                    {file && <ImageThumb image={file} />}
                </div>
            </div>

            <Button variant="primary" onClick={upLoad}>
                save
            </Button>

        </div>
    )
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default ProfileHead