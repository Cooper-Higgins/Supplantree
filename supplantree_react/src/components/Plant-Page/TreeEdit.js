import React, { useState } from "react";

const TreeEdit = ({tree, handleUpdate, locations}) => {

    const [stateTree, setStateTree] = useState({
        id: tree.id,
        species: tree.species,
        size: tree.size,
        soil: tree.soil,
        age: tree.age,
        locations: tree.locations
    })

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedTree = {...stateTree}
        copiedTree[propertyName] = event.target.value;
        setStateTree(copiedTree)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedStateTree = {...stateTree};
        updatedStateTree.id = tree.id
        handleUpdate(updatedStateTree);
    }


    return ( 
        <div className="add-location">
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Where is it planted?"
                name="newLocation"
                onChange={handleChange}
                value={stateTree.locations}/>
            </form>
        </div>
     );
}
 
export default TreeEdit;