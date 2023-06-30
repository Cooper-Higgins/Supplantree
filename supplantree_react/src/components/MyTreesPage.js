import React from 'react';
import Request from '../helpers/request';
import { useEffect, useState } from 'react';

const MyTrees = ({users}) => {

    const usersTrees = users[0]["trees"].map((tree, index) => {
        return(
            <p>{tree.species}</p>
        )
    })

    return ( 
        <div>
            {usersTrees}
        </div>
     );
}
 
export default MyTrees;