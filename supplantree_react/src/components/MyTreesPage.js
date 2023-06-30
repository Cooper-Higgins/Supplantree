import React from 'react';

const MyTrees = ({users}) => {
    console.log(users);
    console.log(users[0]["trees"]);

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