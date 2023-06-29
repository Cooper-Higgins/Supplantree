import React from "react";
import TreeCard from "./TreeCard";

const CarouselCard = ({tree, postTree, users, setUsers, putUser}) => {

    const handleSubmit = (event) => {
          event.preventDefault()
          postTree(tree)
        //   .then((response) => {
        //       return response.json();
        //     })
        //     .then((data) => {
        //       const retrievedTree = data;
        //       const updatedUsers = [...users]
        //       updatedUsers[0]["trees"].push(tree)
        //       setUsers(updatedUsers)
        //       putUser(updatedUsers[0])
        //       })
        //     .catch((error) => {
        //       console.error('Error occurred during tree post:', error);
        //     });
        };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <TreeCard tree={tree}/>
            <br />
            <button type="submit">I've planted this!</button>
            </form>
        </div>
     );
}
 
export default CarouselCard;