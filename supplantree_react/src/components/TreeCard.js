import React from 'react';


const TreeCard = ({tree}) => {
    return ( 
        <div className='tree-card'>
            <h4>{tree.species}</h4>
            {/* <img>{tree.image}</img> */}
            <p>{tree.nature}</p>
            <p>{tree.soil}</p>
            <p>{tree.size}</p>
        </div>
     );
}
 
export default TreeCard;