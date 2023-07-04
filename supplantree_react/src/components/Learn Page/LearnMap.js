import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const LearnMap = () => {

    const data = {
        title: "Regions of Scotland",
        rows: [
            {
                title: "Central Scotland",
                content: ``,
            },
            {
                title: "Hebrides",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Highlands",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "North-East Scotland",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Orkney Isles",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Shetland Isles",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "South-East Scotland",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "South-West Scotland",
                content: <p></p>,
            },
        ],
    };
    
    const styles = {
        bgColor: 'light-green',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentColor: 'black',
        arrowColor: "black",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return ( 
        <div>
            <div className='flex justify-evenly p-8'>
                <div className="flex flex-col justify-center gap-48">
                    <h3 className="text-5xl">Learn more about Scotland's soils</h3>
                    <div className="faq-style-wrapper">
                    <Faq
            data={data}
            styles={styles}
            config={config}
            />
            </div>
                </div>
                    <img
                        className="w-6/12 md:w-4/12 mb-4 md:mb-12"
                        src="./images/Scotland_region_map.svg"
                        alt="interactive scotland map"
                    ></img>
                </div>
        </div>
     );
}
 
export default LearnMap;