import React from "react";

function RegForm() {
  return (
    <div className="w-6/12 ml-5 rounded-xl drop-shadow-xl bg-white h-[80%] px-6 py-6">
      <h2 className="font-tinos text-2xl text-left">Manufacturer Register</h2>
      <form action="" className="flex flex-col mt-10 ">
        <label className="text-left text-xl ml-2" for="id">
          ID
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="text"
          id="id"
          name="id"
        />
        <label className="text-left mt-4 text-xl ml-2" for="fname">
          First Name
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="text"
          id="fname"
          name="fname"
        />
        <label className="text-left mt-4 text-xl ml-2" for="lname">
          Last Name
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="text"
          id="lname"
          name="lname"
        />
        <label className="text-left mt-4 text-xl ml-2" for="email">
          E-mail
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="email"
          id="email"
          name="email"
        />
        <label className="text-left mt-4 text-xl ml-2" for="phone">
          Contact Number
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="phone"
          id="phone"
          name="phone"
        />
        <button
          className="bg-black w-42 h-10 rounded-md text-white mt-4 ml-80"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegForm;
