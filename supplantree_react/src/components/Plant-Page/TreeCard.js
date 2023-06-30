const TreeCard = ({ tree, postTree }) => {
  return (
    <div className="flex flex-col justify-center p-6 gap-5">
      <p className="place-self-center">{tree.species}</p>
      <img
        className="w-10/12 place-self-center md:w-8/12 m-2 p-4 rounded-3xl"
        src="./images/first_image.jpg"
        alt="placeholder"
      ></img>
      <p className="place-self-center">Maximum Height: {tree.size}</p>
      <p className="place-self-center text-center">{tree.nature}</p>
      <button
        className="place-self-center border-4 border-white bg-slate-300 p-2 rounded-xl"
        type="submit"
      >
        I've planted this!
      </button>
    </div>
  );
};

export default TreeCard;
