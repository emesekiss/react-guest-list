import React, { useState } from 'react';

const GuestForm = ({ handleRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClick = () => {
    handleRegister({
      firstName,
      lastName,
      id: `${firstName}${lastName}`,
      attending: false,
    });
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      ></input>
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      ></input>
      <button onClick={handleClick}>Register Guest</button>
    </div>
  );
};

export default GuestForm;
