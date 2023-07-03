import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

const LearnMap = () => {
    return ( 
        <div>
        <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-3xl"
            src="./images/Scotland_region_map.svg"
            alt="placeholder"
          ></img>
        </div>
     );
}
 
export default LearnMap;