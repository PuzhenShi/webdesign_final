import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProfilePay() {


    const [input, setInput] = useState({
        userName: '',
        userSign: '',
        userPassword: ''
    });
    //script for modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChange(event) {//get input content
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const modify = (event) => {
        //join the trial
    };


    return (
        <div class="col-8 ml-8 mb-8 rounded" id="profilePayOut">
            <div class="row justify-content-md-center" id="profilePayHead">

                ProfilePremium

            </div>
            {/* the right panel of profile home, display the basic info of this user but can't edit */}
            <div class="profilePanel" id="profilePayPanel">
                <div>
                    <p>user name:</p>
                </div>
                {/* post username here */}
                <div>
                    <p>Premium:</p>
                    {/* post user premium status */}
                </div>
            </div>


            {/* payment api put here */}
            {/* <!-- premium button with Modal --> */}
            <div>
                <Button variant="primary" id="profilePayBtn" onClick={handleShow}>
                    join premium
                </Button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to join the premium trial?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={modify}>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ProfilePay