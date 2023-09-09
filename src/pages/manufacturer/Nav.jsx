import React from "react";

function Nav({ activeButton, setActiveButton }) {
  const activate = (prop) => {
    setActiveButton(prop);
  };
  return (
    <div className=" fixed pr-28 text-2xl w-full h-20 flex font-tinos items-center justify-between">
      <h1 className=" h-fit ml-10 ">Manufacturer Analysis</h1>
      <div className=" mr-10 p-2  flex ">
        <button
          className={`ml-8 text-xl drop-shadow-md bg-white py-2 px-8 transition-all duration-700 ease-linear rounded-md  ${
            activeButton === 1 ? "text-gray-800" : "text-gray-400"
          }`}
          onClick={(e) => {
            e.preventDefault();
            activate(1);
          }}
        >
          button1
        </button>

        <button
          className={`ml-8 text-xl drop-shadow-md bg-white py-2 px-8 transition-all duration-700 ease-linear rounded-md  ${
            activeButton === 2 ? "text-gray-800" : "text-gray-400"
          }`}
          onClick={(e) => {
            e.preventDefault();
            activate(2);
          }}
        >
          button2
        </button>

        <button
          className={`ml-8 text-xl drop-shadow-md bg-white py-2 px-8 transition-all duration-700 ease-linear  rounded-md  ${
            activeButton === 3 ? "text-gray-800" : "text-gray-400"
          }`}
          onClick={(e) => {
            e.preventDefault();
            activate(3);
          }}
        >
          button3
        </button>
      </div>
    </div>
  );
}

export default Nav;
