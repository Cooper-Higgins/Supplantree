import React, { useEffect, useState } from 'react';

const AreaChoiceDropdown = ({data}) => {

    const areaOptions = data.map((location, index) => {
        return <option key={index} value = {index}>{location.name}</option>
    })

    return ( 
        <select defaultValue={"select-area"}>
        <option disabled value= "select-area">Select an area</option>
            {areaOptions}
        </select>
     );
}
 
export default AreaChoiceDropdown;