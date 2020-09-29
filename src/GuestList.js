import React from 'react';

const GuestList = ({ allGuests, handleDelete, handleAttending }) => (
  <ol>
    {allGuests.map((item) => (
      <li key={item.firstName}>
        <input
          type="checkbox"
          value={item.attending}
          onChange={(e) => handleAttending(item.id, e.target.checked)}
        />
        <p>{`${item.firstName} ${item.lastName}`}</p>
        <button onClick={() => handleDelete(item.id)}>Delete Guest</button>
      </li>
    ))}
  </ol>
);

export default GuestList;
