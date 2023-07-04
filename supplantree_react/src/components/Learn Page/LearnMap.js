import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const LearnMap = () => {

    const data = {
        title: "Regions of Scotland",
        rows: [
            {
                title: "Central Scotland",
                content: `Characterised by the urban central belt which holds anywhere between 2.4 and 4.2m of Scotland's population. Predominately made of Brown Forest Soils which are amongst the most fertile in Scotland, the central belt supports small semi-natural woodlands and urban growth. Although urban in comparison to the rest of Scotland - this area still supports a rich array of wildlife outside of Glasgow and Edinburgh.`,
            },
            {
                title: "Hebrides",
                content:
                    "Spanning from Islay in the south to the Western Isles in the north. With predominately Peaty Gley soils, they have low potential for forestry and agriculture on the whole. They typically support wet heathland and rough grassland communities. However, some outliers such as Mull have significant potential for commercial forestry - and is home to the Future Forest Company's largest plantation.",
            },
            {
                title: "Highlands",
                content: `Characterised the Great Glen boundary fault from Loch Lomond in the south to Inverness in the north, the Highlands typically have lower potential for forestry and agriculture due to the abundance of highly acidic and poorly draining Peaty Gley soil. However this varies greatly between areas - with pockets of temperate rainforest on the West Coast, and remnants of the Caledonian Boreal Forest in the Cairngorms.`,
            },
            {
                title: "North-East Scotland",
                content: `The only area in Scotland with predominately Humus-Iron Podzols. This land is naturally acidic and nutrient deficient, but still supports a number of uses including productive forestry plantations for native pinewoods, and heather moorland.`,
            },
            {
                title: "Orkney Isles",
                content: `Perhaps surprisingly, Orkney has quite arable Brown Forest Soil land, and in sheltered areas away from the exposed wind - can support tree growth.`,
            },
            {
                title: "Shetland Isles",
                content: `This archipelago is formed of Blanket Peats, formed under cool maritime conditions and acting as a significant carbon sink. These habitats support a number of bird populations and are of international importance due to their scarcity and environmental impact. Despite the ferocious wind and reputation for being treeless - Scottish Forestry is supporting a tree nursery in Lerwick for promoting Downy Birch.`,
            },
            {
                title: "South-East Scotland",
                content: `Generally fertile land with high potential for forestry and agriculture, characterised by widespread Brown Forest Soils. It has some of the best agricultural land in Scotland, as part of the central lowland belt.`,
            },
            {
                title: "South-West Scotland",
                content: `Similar in profile to South-East Scotland, this area has an abundance of arable land - mostly used for agriculture rather than commercial forestry, despite being more sparsely populated.`,
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