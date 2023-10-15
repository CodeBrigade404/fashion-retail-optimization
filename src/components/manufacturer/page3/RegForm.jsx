import React, { useState } from "react";

function RegForm() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    type: "",
    point: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3001/manufacturers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Manufacturer registered successfully!");
        // Optionally, you can reset the form here.
        setFormData({
          id: "",
          firstName: "",
          lastName: "",
          type: "",
          point: 0,
        });
      } else {
        alert("Failed to register manufacturer.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="w-4/12 ml-5 rounded-xl drop-shadow-xl bg-white h-[80%] px-6 py-6">
      <h2 className="font-tinos text-2xl text-left">Manufacturer Register</h2>
      <form action="" className="flex flex-col mt-10 " onSubmit={handleSubmit}>
        <label className="text-left text-xl ml-2" for="id">
          ID
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="text"
          id="id"
          name="id"
          placeholder="MID"
          value={formData.id}
          onChange={handleChange}
        />
        <label className="text-left mt-4 text-xl ml-2" for="fname">
          First Name
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="text"
          id="fname"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label className="text-left mt-4 text-xl ml-2" for="lname">
          Last Name
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="text"
          id="lname"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label className="text-left mt-4 text-xl ml-2" for="type">
          Type
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
        <label className="text-left mt-4 text-xl ml-2" for="pont">
          Current Point
        </label>
        <input
          className="h-10 border-solid mt-2 border-2 rounded-md"
          type="number"
          id="potnt"
          name="point"
          value={formData.point}
          onChange={handleChange}
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
