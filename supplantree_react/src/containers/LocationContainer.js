import React from "react";
import Request from "../helpers/request";

const LocationContainer = ({trees, setTrees, locations, setLocations, handleTreePut}) => {

    const handleLocationPost = (location) => {
        const request = new Request()
        request
        .post("/api/locations", location)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const foundLocation = data;
            const updatedTrees = [...trees];
            updatedTrees.locations.push(foundLocation);
            setTrees(updatedTrees);
            console.log(updatedTrees);
            handleTreePut(updatedTrees);
        })
    }

    return ( 
        <div>
            <p>Locations</p>
        </div>
     );
}
 
export default LocationContainer;