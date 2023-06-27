import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const User = ({trees, user, addTreeToUser}) => {

    if(!user){
        return "Loading....."
    }
    const url = "/users/${user.id}"
    
    const handleAddTree = () => {

        console.log(user);
        addTreeToUser();

    }

    return ( 
    <Fragment>
        <p>
        <Link to={url} className="name">
            {user.name}
        </Link>
        </p>
        <button onClick={handleAddTree}>Add Tree</button>
    </Fragment>
  )

}
 
export default User;