import React, { useEffect, useState } from "react";
import Request from "../helpers/request";
import { useParams, Route, Routes } from "react-router-dom";
import User from "../components/User";

const UserContainer = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        const request = new Request()
        request.get("/api/users")
        .then((data) => {
            setUsers(data)
        })
    }

    const UserWrapper = () => {
        console.log("wrapper triggers");
        const {id} = useParams()
        let foundUser = findUserById(id)
        return <User user={foundUser}/>
    }

    const findUserById = (id) => {
        let foundUser = null;
        for(let user of users){
          if(user.id === parseInt(id)){
            foundUser = user
          }
        }
        return foundUser;
      }

    return (
        <Routes>
            <Route path="/:id" element={<UserWrapper/>}/>
        </Routes>
        
     );
}
 
export default UserContainer;