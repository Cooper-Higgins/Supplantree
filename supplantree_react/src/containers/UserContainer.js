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
        request.post('/api/trees', tree)
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
      <div>
      {/* <TreeForm data={data} postTree={handleTreePost} putUser={handleUserPut} /> */}
      {/* <ResultCarousel data={data.trees} /> */}
      <div className="flex justify-center my-20">
        <a href="http://localhost:3000/my-trees">
          <button className="ml-10 bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            See my Trees
          </button>
        </a>
      </div>
    </div>
     );
}
 
export default UserContainer;