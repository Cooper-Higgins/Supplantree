import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import Request from '../../helpers/request';
import Login from '../Login/LoginPage';

const TreeForm = ({ postTree, putUser, data }) => {

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
        "animals": ["The perfect home for iconic Scottish wildlife, such as the red squirrel, capercaillie, Scottish crossbill, and the Scottish wildcat"]
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
    postTree(tree)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const retrievedTree = data;
        const updatedUsers = [...users]
        updatedUsers[0]["trees"].push(tree)
        setUsers(updatedUsers)
        putUser(updatedUsers[0])
        })
      .catch((error) => {
        console.error('Error occurred during tree post:', error);
      });
  };

  const areaOptions = data.locations.map((location, index) => {
    return <option key={index} value = {index}>{location.name}</option>
})

  const soilOptions = Object.keys(data.trees[0]["soil"]).map((soil, index) => {
    return <option key={index} value={index}>{soil}</option>
  })
  

  return (
    <div>
      <h2>Tree Form</h2>
      <form onSubmit={handleSubmit}>
      <select defaultValue={"select-area"}>
        <option disabled value= "select-area">Select an area</option>
            {areaOptions}
        </select>
        <select defaultValue={"select-soil"}>
        <option disabled value= "select-soil">Select a soil</option>
            {soilOptions}
        </select>
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