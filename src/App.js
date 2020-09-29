import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

function App() {
  const [allGuests, setAllGuests] = useState([]);

  const handleRegister = (guest) => setAllGuests([...allGuests, guest]);

  const handleDelete = (guestId) =>
    setAllGuests(allGuests.filter((item) => guestId !== item.id));

  const handleAttending = (guestId, attending) => {
    const guestIndex = allGuests.findIndex((element) => element.id === guestId);
    let newAttending = [...allGuests];
    newAttending[guestIndex] = {
      ...newAttending[guestIndex],
      attending: attending,
    };
    setAllGuests(newAttending);
  };

  return (
    <div>
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
