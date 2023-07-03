import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

const LearnMap = () => {
    return ( 
        <div className="">
        <div className="flex flex-col justify-center p-4">
        <h1 className="text-6xl p-4">Learn</h1>
        <h3 className="text-4xl">Click a region to learn more about its soil</h3>

       <div className="flex justify-evenly items-center gap-10 m-12">
            <img
                className="place-self-center w-6/12 md:w-4/12 mb-4 md:mb-12"
                src="./images/Scotland_region_map.svg"
                alt="interactive scotland map"
            ></img>
            </div>
      </div>
      </div>
     );
}
 
export default LearnMap;