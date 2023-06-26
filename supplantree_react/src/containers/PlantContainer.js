import React from 'react';
import AreaChoiceDropdown from '../components/Plant-Page/AreaChoiceDropdown';
import SoilChoiceDropdown from '../components/Plant-Page/SoilChoiceDropdown';
import ResultCarousel from '../components/Plant-Page/ResultCarousel';

const PlantContainer = () => {
    return (
        <div>
        <AreaChoiceDropdown/>
        <SoilChoiceDropdown/>
        <ResultCarousel/>
        </div>

     );
}
 
export default PlantContainer;