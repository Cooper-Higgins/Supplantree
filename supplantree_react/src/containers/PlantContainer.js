import React, { useEffect, useState } from 'react';
import AreaChoiceDropdown from '../components/Plant-Page/AreaChoiceDropdown';
import SoilChoiceDropdown from '../components/Plant-Page/SoilChoiceDropdown';
import ResultCarousel from '../components/Plant-Page/ResultCarousel';
import Request from '../helpers/request';

import data from "../data.json"

const PlantContainer = () => {

    // const [trees, setTrees] = useState([])

    // useEffect(() => {
    //     getTrees()
    // },[])

    // const getTrees = () => {
    //     const request = new Request()
    //     request.get("/api/trees")
    //     .then((data) => {
    //         setTrees(data)
    //     })
    // }

    return (
        <div>
        <AreaChoiceDropdown data={data.locations}/>
        <SoilChoiceDropdown/>
        <ResultCarousel data={data.trees}/>
        </div>

     );
}
 
export default PlantContainer;