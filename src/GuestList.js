import { baseUrl } from './App.js';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const guestListStyle = css`
  max-width: 1000px;
  color: #fffafb;
  font-size: 25px;
  margin: auto;
  padding-left: 25px;
`;

const guestContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  input,
  p,
  button {
    margin: 5px 20px;
  }

  p {
    word-break: break-word;
  }

  button {
    cursor: pointer;
    border-radius: 20px;
    color: #494949;
    font-weight: bold;
    text-decoration: none;
    background: #ffffff;
    padding: 5px;
    border: 2px solid #494949;
    display: inline-block;
    transition: all 0.4s ease 0s;
  }
`;

const GuestList = ({ allGuests, handleDelete, handleAttending }) => {
  console.log(allGuests);

  const handleDeleteClick = (id) => {
    async function deleteGuest() {
      const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
      const deletedGuest = await response.json();
      handleDelete(deletedGuest.id);
    }
    deleteGuest();
  };

  const handleAttendingClick = (id, checked) => {
    async function attendGuest() {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: checked }),
      });
      const updatedGuest = await response.json();
      handleAttending(updatedGuest.id, updatedGuest.attending);
    }
    attendGuest();
  };

  return (
    <div css={guestListStyle}>
      <p>Attending</p>
      <ol>
        {allGuests.map((item) => (
          <li key={item.id}>
            <div css={guestContainer}>
              <input
                type="checkbox"
                checked={item.attending}
                onChange={(e) =>
                  handleAttendingClick(item.id, e.target.checked)
                }
              />
              <p>{`${item.firstName} ${item.lastName}`}</p>
              <button onClick={() => handleDeleteClick(item.id)}>
                Delete Guest
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GuestList;
