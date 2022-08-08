import React from 'react'

function MyZoneBar() {
    return (
        <div class="col-12 row" id="zoneBar">
            <span>
                <span id="zoneBarTitle">MyZoneBar   </span>
                {/* number of subscribe displayed below */}
                <span id="zoneBarSub">subscribe:</span>
                {/* number of fans displayed below */}
                <span id="zoneBarFan">fans:</span>
            </span>


        </div>

    )
}

export default MyZoneBar