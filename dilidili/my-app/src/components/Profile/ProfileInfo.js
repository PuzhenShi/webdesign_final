import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function ProfileInfo() {


    //script for datepicker component
    const [startDate, setStartDate] = useState(new Date());


    //script for modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    //ProfileDatePicker();
    return (
        <div class="col-8 ml-8 mb-8 rounded" id="profileHomeOut">
            <p>What</p>
            {/* the right panel of profile info, display the basic info of this user and user can edit them */}
            <div id="profileInfoPanel" class="profilePanel">
                {/* post username here */}
                {/* the number of subscribed publishers and fans */}
                <p>user name:</p>
                {/* post username here, use placeholder to display exsit username */}
                <input type={"text"} class="form-control" id="profileInfoName" />

                <p>user sign:</p>
                {/* post user sign here, use placeholder to display exsit signature*/}
                <input type={"text"} class="form-control" id="profileInfoSign" />
                <p>gender:</p>
                {/* post user gender here, set default value from database */}

                <div class="btn-group " role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="gender" id="genderMale" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="genderMale">male</label>

                    <input type="radio" class="btn-check" name="gender" id="genderFemale" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="genderFemale">female</label>

                    <input type="radio" class="btn-check" name="gender" id="genderOther" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="genderOther">other</label>
                </div>

                {/* birthdate select section, but script uncomplete */}
                <div class='col-sm-6'>
                    <p>birth date:</p>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                </div>




                {/* <!-- save button with Modal --> */}
                <Button variant="primary" onClick={handleShow}>
                    save
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to save the changes?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Yes
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>

                    </Modal.Footer>
                </Modal>


            </div>

        </div>


    )
}

export default ProfileInfo