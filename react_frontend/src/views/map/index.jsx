import React, { useState } from "react";
import {Polyline,Map,MarkerOrderTip, Marker, NavigationControl, InfoWindow} from 'react-bmap'


const OurMap = () => {

  
    return (

        <div>
        <div  id='allmap' style={{
            width:'80vw',
            height:'100vh'
          }}>
              <Map center={{lng: 116.402544, lat: 29.928216}} zoom="11">
                    <Marker color='green' strokeColor='blue' position={{lng: 116.402544, lat: 29.928216}} />
                    <Marker position={{lng: 116.402544, lat: 29.828216}} />
                    <Polyline strokeColor='green' path={
                            [
                            {lng: 116.403119, lat: 29.929543},
                            {lng: 116.265139, lat: 29.978658},
                            {lng: 116.217996, lat: 29.904309}
                            ]}/>
                    <NavigationControl /> 
                </Map>

        </div>
        </div>
    );
};

export default OurMap;

