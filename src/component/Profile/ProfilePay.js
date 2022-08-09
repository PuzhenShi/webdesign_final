import React from 'react'
import Button from 'react-bootstrap/Button';
function ProfilePay() {
    return (
        <div class="col-8 ml-8 mb-8 rounded">
            <p>ProfilePremium</p>
            {/* the right panel of profile home, display the basic info of this user but can't edit */}
            <div id="profileHomePanel" class="profilePanel">

                <p>user name:</p>
                {/* post username here */}
                <div id="profileHomeName"></div>
                <p>Premium:</p>
                {/* post user premium status */}

            </div>
            
            {/* payment api put here */}
            <Button variant="primary">
                join premium
            </Button>


        </div>
    )
}

export default ProfilePay