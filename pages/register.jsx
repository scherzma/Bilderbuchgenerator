"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../app/features/auth/authSlice';
import { AuthManager } from '../app/api/AuthApi';

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  async function onSubmit(e) {
    e.preventDefault();
    AuthManager.register(username, username, password);
    // const data = dispatch(register(username, password));
    // setMessage(data);
  }
  return (
    <div>
      { (message !== null) ? (<p>message</p>) : (<p>nomsg</p>) }
      <form onSubmit={onSubmit}>
        Benutzername:
        <input type="text" value={username} onChange={(evt) => setUsername(evt.value)} />
        <br />
        Passwort:
        <input type="password" value={password} onChange={(evt) => setPassword(evt.value)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
