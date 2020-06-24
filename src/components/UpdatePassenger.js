import React, { useState, useEffect } from 'react'

function UpdatePassenger(props) {
  const {
    name,
    gender,
    phone,
    email,
    departure
  } = props.selectedPassenger;
  const [passenger, setPassenger] = useState({
    name,
    gender,
    phone,
    email,
    departure
  });

  useEffect(() => {
    setPassenger({...props.selectedPassenger})
  }, [props.selectedPassenger])

  const inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPassenger({
      ...passenger,
      [name]: value //we need the different values coming inside name instead of name(ie, [name])
    });
  };

  const onScreenChange = () => {
    props.onScreenChange("list");
  };

  function updatePassenger(id) {
    return fetch(`http://localhost:5000/passengers/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(passenger)
    });
  }

  function onUpdate(e) {
        updatePassenger(props.selectedPassenger._id)
        .then(onScreenChange)
    e.preventDefault();
  }

    return (
    <div>
      <form onSubmit={onUpdate}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={passenger.name}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          Contact:
          <input
            type="tel"
            name="phone"
            value={passenger.phone}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          Gender
          <select name="gender" value={passenger.gender} onChange={inputChange}>
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
            value={passenger.email}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          From
          <select
            name="departure"
            value={passenger.departure}
            onChange={inputChange}
          >
            <option value="">Select...</option>
            <option value="Bangalore">Bangalore</option>
            <option value="pune">pune</option>
            <option value="kolkata">kolkata</option>
          </select>
        </label>
        <br />
        <br />
        <input value="Update" type="submit" />
        <button onClick={onScreenChange}>Back</button>
      </form>
    </div>
  );
}

export default UpdatePassenger

