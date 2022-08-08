import React from 'react'

function ProfileHome() {
  return (
    <div class="col-8 ml-8 mb-8 rounded">
      {/* the right panel of profile home, display the basic info of this user but can't edit */}
      <div id="profileHomePanel" class="profilePanel">       
        
        <p>user name:</p>
        {/* post username here */}
        <div id="profileHomeName"></div>
        <p>user sign:</p>
        {/* post user sign here */}
        <div id="profileHomeSign"></div>
        {/* the number of subscribed publishers and fans */}
        <p>subscribe:</p>
        <div id="profileHomeSub"></div>
        <p>fans:</p>
        <div id="profileHomeFan"></div>
      </div>
      <p>ProfileHome</p>

    </div>
  )
}

export default ProfileHome