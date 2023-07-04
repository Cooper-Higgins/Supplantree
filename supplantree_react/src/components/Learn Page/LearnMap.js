import { useState } from "react";
import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

import { ReactSVG } from 'react-svg';

const LearnMap = () => {

    const [selectedPath, setSelectedPath] = useState(null);

    const handleClick = (event) => {
      const pathId = event.currentTarget.id;
      setSelectedPath(pathId);
    };

    return ( 
        <div className="">
            <div className="flex flex-col justify-center p-4">
                <h1 className="text-6xl p-4">Learn</h1>
                <h3 className="text-4xl">Click a region to learn more about its soil</h3>

        <div className="flex justify-evenly items-center gap-10 m-12">
            <ReactSVG onClick={handleClick} src={"./images/Scotland_region_map.svg"}/>
            <div>
                Selected Path: {selectedPath}
            </div>
        </div>
      </div>
      </div>
     );
}
 
export default LearnMap;