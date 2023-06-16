import React from 'react';
import Book from './Book';

function Sidebar() {
  return (
    <aside>
      <h2>Sidebar</h2>
      <ul>
        <li><Book /></li>
        <li><Book /></li>
        <li><Book /></li>
        <li><Book /></li>
        <ListItem>Irgendwas</ListItem>
      </ul>
    </aside>
  );
}

function ListItem() {
  return (
    <li>
      Button
    </li>
  );
}
export default Sidebar;
