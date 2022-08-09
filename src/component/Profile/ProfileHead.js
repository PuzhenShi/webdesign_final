import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading';
import Button from 'react-bootstrap/Button';

function ProfileHead() {
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

            <Button variant="primary">
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