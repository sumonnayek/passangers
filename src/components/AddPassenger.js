import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreen } from "../actions";

const AddPassenger = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    departure: "",
  });
  const inputRef = React.createRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const addPassenger = async (newPassenger) => {
    await fetch(`http://localhost:5000/passengers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPassenger),
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await addPassenger(userDetails);
    dispatch(setScreen("list"));
  };
  const { name, gender, phone, email, departure } = userDetails;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={inputChange}
            ref={inputRef}
          />
        </label>
        <br />
        <label>
          Contact:
          <input type="tel" name="phone" value={phone} onChange={inputChange} />
        </label>
        <br />
        <label>
          Gender
          <select name="gender" value={gender} onChange={inputChange}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          From
          <select name="departure" value={departure} onChange={inputChange}>
            <option value="">Select...</option>
            <option value="Bangalore">Bangalore</option>
            <option value="pune">pune</option>
            <option value="kolkata">kolkata</option>
          </select>
        </label>
        <br />
        <br />
        <input value="Add Passenger" type="submit" />
        <button
          onClick={() => {
            dispatch(setScreen("list"));
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default AddPassenger;
