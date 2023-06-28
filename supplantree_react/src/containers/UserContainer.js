import React, { useEffect, useState } from "react";
import Request from "../helpers/request";
import { useParams, Route, Routes } from "react-router-dom";
import User from "../components/User";
import TreeForm from "../components/Plant-Page/TreeForm"

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

      const handleTreePost = (tree) => {
        const request = new Request();
        return request.post('/api/trees', tree)
      };

      const handleUserPut = (user) => {
        console.log(user);
        const request = new Request()
        request.put(`/api/users/${user.id}`, user).then(() => {
          console.log('successful');
        })
        .catch((error) => {
          console.error(error)
        })
      }

    return (
        <Routes>
            <Route path="/:id" element={<TreeForm postTree={handleTreePost} putUser={handleUserPut}/>}/>
        </Routes>
        
     );
}
 
export default UserContainer;