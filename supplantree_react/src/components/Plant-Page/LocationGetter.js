import React, {useEffect} from "react";

const LocationGetter = () => {
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude; 

                    console.log('Latitude: ', latitude);
                    console.log('Longitude: ', longitude);
                },
                (error) => {
                    console.error('Error: ', error.message);
                }
            )
        } else {
            console.log('Geolocation not supported');
        }
    }, []);

    return <div>Blah Blah</div>
}

export default LocationGetter