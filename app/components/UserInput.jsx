import React from 'react';

function UserInput() {
  return (
    <div>
      <label htmlFor="titelInput">Titel</label>
      <input type="text" id="titelInput" />

      <label htmlFor="beschreibungInput">Beschreibung</label>
      <input type="text" id="beschreibungInput" />
    </div>
  );
}
export default UserInput;
