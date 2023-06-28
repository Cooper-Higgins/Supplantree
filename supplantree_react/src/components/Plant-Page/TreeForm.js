import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import Request from '../../helpers/request';
import Login from '../Login/LoginPage';

const TreeForm = ({ postTree, putUser }) => {

  const navigate = useNavigate();
 
  const [tree, setTree] = useState({
        "id":1,
        "species": "Scots Pine", 
        "size": 35,
        "soil":{
          "Brown Forest Soil": true,
          "Peaty": true,
          "Humus Iron, Brown Forest Soil": true
        },
        "animals": ["The perfect home for iconic Scottish wildlife, such as the red squirrel, capercaillie, Scottish crossbill and the Scottish wildcat"]
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  },[])

  const getUsers = () => {
    const request = new Request()
    request.get("/api/users")
    .then((data) => {
        setUsers(data)
    })
}

  const handleTreeChange = (event) => {
    setTree({ ...tree, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(tree);
    postTree(tree)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('response: ', data);
        const retrievedTree = data;
        console.log(retrievedTree);
        const updatedUsers = [...users]
        console.log(updatedUsers);
        updatedUsers[0]["trees"].push(tree)
        console.log(updatedUsers);
        setUsers(updatedUsers)
        console.log(users);
        putUser(updatedUsers[0])
        setTimeout(()=> {
            navigate('/users')
        }, 5000)
        console.log('putUser called')
        })
      .catch((error) => {
        console.error('Error occurred during tree post:', error);
      });
  };

  return (
    <div>
      <h2>Tree Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tree Name:
          <input type="text" name="name" value={tree.name || ''} onChange={handleTreeChange} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TreeForm;