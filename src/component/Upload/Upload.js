
import axios from 'axios';
import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import Button from 'react-bootstrap/Button';

function Upload() {

    //***************************************
    //script for image upload
    const [images, setImages] = React.useState([]);
    //max number of images you can upload? not sure
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    //***************************************
    //***************************************
    //script for file uplaod
    //the only thing we need to know is the file name
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }
    //***************************************

    return (
        <div >


            <div class="col-10 row rounded">
                <div class="col-5">
                    <form>
                        <input type="file" onChange={handleChange} />
                        {/* <button type="submit">Upload</button> */}
                    </form>
                </div>
                <div class="col-5">
                    <p>Upload the cover for your vedio:</p>
                    <ImageUploading
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
                    </ImageUploading>
                </div>

                <p>vedio title:</p>
                <input type={"text"} class="form-control" id="vedioTitle" />
                <p>vedio duration:</p>
                <input type={"text"} class="form-control" id="vedioDuration" />


                <div class="col-3">
                    <Button variant="primary">
                        Upload
                    </Button>
                </div>


            </div>
        </div>
    )
}

export default Upload