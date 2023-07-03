import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

const LearnMap = () => {
    return ( 
        <div className='flex justify-evenly'>
        <div className="flex flex-col justify-center gap-48 w-1/3">
            <h3 className="text-5xl">Click a region to learn more about its soil</h3>
            <p className='text-center border-4 border-white bg-slate-300 rounded-xl'>
                sdfrevgewFCEWfsdfrevgewFCEWfsdfrevgewFCEWsdfrevgewFCEWfsdfrevgew sdfrevgewFCEWfsdfrevgewFCEWfsdfrevgewFCEWsdfrevgewFCEWfsdfrevgew sdfrevgewFCEWfsdfrevgewFCEWfsdfrevgewFCEWsdfrevgewFCEWfsdfrevgew sdfrevgewFCEWfsdfrevgewFCEWfsdfrevgewFCEWsdfrevgewFCEWfsdfrevgew sdfrevgewFCEWfsdfrevgewFCEWfsdfrevgewFCEWsdfrevgewFCEWfsdfrevgew
                
            </p>
       </div>
            <img
                className="w-6/12 md:w-4/12 mb-4 md:mb-12"
                src="./images/Scotland_region_map.svg"
                alt="interactive scotland map"
            ></img>
      </div>
     );
}
 
export default LearnMap;