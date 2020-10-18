/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { baseUrl } from './App.js';

const registerGuest = css`
  border-radius: 20px;
  color: #494949;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 20px;
  border: 4px solid #494949;
  display: inline-block;
  transition: all 0.4s ease 0s;
  margin: 10px;
  cursor: pointer;

  :hover {
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    transition: all 0.4s ease 0s;
  }
`;

const inputStyle = css`
  margin: 10px;
  border-color: #fffafb;
  height: 30px;
`;

const guestFormStyle = css`
  text-align: center;
`;

const GuestForm = ({ handleRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClick = () => {
    async function postRegistered() {
      const response = await fetch(`${baseUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName }),
      });
      const createdGuest = await response.json();

      handleRegister(createdGuest);
      setFirstName('');
      setLastName('');
    }
    postRegistered();
  };

  return (
    <div css={guestFormStyle}>
      <input
        css={inputStyle}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        css={inputStyle}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <button css={registerGuest} onClick={handleClick}>
        Register Guest
      </button>
    </div>
  );
};

export default GuestForm;
