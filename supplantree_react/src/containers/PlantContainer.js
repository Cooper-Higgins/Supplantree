import React from 'react';
import AreaChoiceDropdown from '../components/Plant-Page/AreaChoiceDropdown';
import SoilChoiceDropdown from '../components/Plant-Page/SoilChoiceDropdown';
import ResultCarousel from '../components/Plant-Page/ResultCarousel';

import data from "../data.json"

const PlantContainer = () => {
    return (
        <div>
        <AreaChoiceDropdown data={data.locations}/>
        <SoilChoiceDropdown/>
        <ResultCarousel/>
        </div>

     );
}
 
export default PlantContainer;