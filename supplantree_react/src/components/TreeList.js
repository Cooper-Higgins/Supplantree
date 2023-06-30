import React from 'react';
import TreeCard from './TreeCard'

const TreeList = ({trees}) => {
    return ( 
        <div>
            {trees.map(tree => {
              <TreeCard
              tree={tree}>
              </TreeCard>
            })}
        </div>
     );
}
 
export default TreeList;