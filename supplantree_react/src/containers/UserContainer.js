import React, { useEffect, useState } from "react";
import Request from "../helpers/request";
import { useParams, Route, Routes } from "react-router-dom";
import User from "../components/User";

const UserContainer = ({data}) => {

    const [users, setUsers] = useState([])
    const [trees, setTrees] = useState(data.trees)

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

    const UserWrapper = ({users, addTreeToUser}) => {
        console.log("wrapper triggers");
        const {id} = useParams()
        let foundUser = findUserById(id)
        return <User user={foundUser} addTreeToUser={addTreeToUser}/>
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

      const addTreeToUser = () => {
        const tree = trees[0]
        const user = users[0]
        user.trees.push(tree)
        console.log(user);
      }

    return (
        <Routes>
            <Route path="/:id" element={<UserWrapper addTreeToUser={addTreeToUser} users={users} trees={trees} />}/>
        </Routes>
        
     );
}
 
export default UserContainer;