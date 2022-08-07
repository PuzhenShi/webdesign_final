import React from 'react'

function ProfileInfo() {


    function ProfileDatePicker() {
        var datePickerElement = document.getElementById("profileDatePicker");
        datePickerElement.datetimepicker();
        // ('#profileDatePicker').datetimepicker();
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


                <div class='col-sm-6'>
                    <p>birth date:</p>
                    <div class="form-group">
                        <div class='input-group date' >
                            <input type='text' class="form-control" id='profileDatePicker' onClick={ProfileDatePicker}/>
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    )
}

export default ProfileInfo