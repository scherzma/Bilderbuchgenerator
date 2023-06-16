'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthState, setAuthToken } from '../app/store/authSlice';
import store from '../app/store/store';
import { AuthManager } from '../app/api/AuthApi';

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(null);
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  async function onSubmit(e) {
    e.preventDefault();
    await AuthManager(authState).login(username, password); //.register(username, username, password);
    console.log(authState);
    // await dispatch(setAuthToken({ token: 'meins' }));
    // console.log(store.getState().auth);
    // const data = dispatch(register(username, password));
    // setMessage(data);
  }
  return (
    <div>
      test:
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
