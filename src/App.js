/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

export const baseUrl = 'https://react-guest-list-emese.herokuapp.com';

const headerStyle = css`
  text-align: center;
  padding: 20px 0px 40px 0;
  color: #fffafb;
  font-weight: bold;
  font-size: 35px;
`;

function App() {
  const [allGuests, setAllGuests] = useState([]);

  useEffect(() => {
    async function getAllGuests() {
      const response = await fetch(`${baseUrl}/`);
      const allGuestsData = await response.json();
      setAllGuests(allGuestsData);
    }
    getAllGuests();
  }, []);

  const handleRegister = (guest) => setAllGuests([...allGuests, guest]);

  const handleDelete = (guestId) =>
    setAllGuests(allGuests.filter((item) => guestId !== item.id));

  const handleAttending = (guestId, attending) => {
    const guestIndex = allGuests.findIndex((element) => element.id === guestId);
    const newAttending = [...allGuests];
    newAttending[guestIndex] = {
      ...newAttending[guestIndex],
      attending: attending,
    };
    setAllGuests(newAttending);
  };

  return (
    <div>
      <header css={headerStyle}>Daniel’s Baby Shower Guest List</header>
      <GuestForm handleRegister={handleRegister} />
      <GuestList
        allGuests={allGuests}
        handleDelete={handleDelete}
        handleAttending={handleAttending}
      />
    </div>
  );
}

export default App;
