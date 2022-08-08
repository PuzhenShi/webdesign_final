import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function ProfileInfo() 
{
    


    //script for datepicker component
    const [startDate, setStartDate] = useState(new Date());
    const [input,setInput]=useState({
        userName:'',
        userSign:''
    });
    const [radio,setRadio]=useState({
        gender:''
    })


    //script for modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function handleChange(event){//get input content
        const{name,value}=event.target;
        setInput(prevInput=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function chooseGender(event){//get the gender
        const{name,value}=event.target;
        setRadio(prevInput=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    const modify=()=>{//submit modify data
        if(input.userName==='')
        {
            alert("Please input name");
            return false;
        }
        else if(radio.gender==='')
        {
            alert("Please choose your gender");
            return false;
        }
        else{
            
            alert(input.userName);
            alert(input.userSign);
            alert(radio.gender);
            alert(startDate.toLocaleDateString());
        }
        

       
    }
   

    //ProfileDatePicker();
    return (
        <div class="col-8 ml-8 mb-8 rounded" id="profileHomeOut">
            {/* the right panel of profile info, display the basic info of this user and user can edit them */}
            <div id="profileInfoPanel" class="profilePanel">
                {/* post username here */}
                {/* the number of subscribed publishers and fans */}
                <p>user name:</p>
                {/* post username here, use placeholder to display exsit username */}
                <input type={"text"} class="form-control" id="profileInfoName" name='userName' value={input.userName} onChange={handleChange} required/>

                <p>user sign:</p>
                {/* post user sign here, use placeholder to display exsit signature*/}
                <input type={"text"} class="form-control" id="profileInfoSign" name='userSign' value={input.userSign} onChange={handleChange} required/>
                <p>gender:</p>
                {/* post user gender here, set default value from database */}

                <div class="btn-group " role="group" aria-label="Basic radio toggle button group" onChange={chooseGender}>
                    <input type="radio" class="btn-check" name="gender" id="genderMale" autocomplete="off" value='male' />
                    <label class="btn btn-outline-primary" for="genderMale">male</label>

                    <input type="radio" class="btn-check" name="gender" id="genderFemale" autocomplete="off" value='female'/>
                    <label class="btn btn-outline-primary" for="genderFemale">female</label>

                    <input type="radio" class="btn-check" name="gender" id="genderOther" autocomplete="off" value='other'/>
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
                        <Button variant="primary" onClick={modify}>
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

export default ProfileInfo;
