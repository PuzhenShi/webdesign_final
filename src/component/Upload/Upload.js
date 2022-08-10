
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import Button from 'react-bootstrap/Button';
import { setCookie, getCookieValue } from "../Cookie/Cookie";

function Upload() {

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
    // Handles file upload event and updates state
    function onFileUpload(event) {
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
        
        
        
    }
    //***************************************
    //***************************************
    //script for file uplaod
    //the only thing we need to know is the file name
    //const [file, setFile] = useState()
    // handle submit button for form
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(files);
    
        // var fd = new FormData()
        // fd.append('files',this.state.files[i][0],this.state.files[i][0].name)
        // var statebody = Object.assign({},this.state,{files:null})
        // fd.append('state',JSON.stringify(statebody))
        // axios.post('/api/',fd)
        //             .then((res)=>{
        //     console.log(res)
        // }).catch((e)=>{
        //     console.log(e)
        // })
        const formData = new FormData()
        formData.append('files', this.state.files)
        axios.post("http://localhost:3001/videos/create", formData, {
        }).then(res => {
            console.log(res)
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
                                onChange={onFileUpload}
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
                                onChange={onFileUpload}
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
                        <input type="text" id="videoTitle" />
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