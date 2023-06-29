const TreeCard = ({tree}) => {
    return(
        <div>
        <p>{tree.species}</p>
        <p>{tree.size}</p>
        <p>{tree.nature}</p>
        </div>
    )
}

export default TreeCard