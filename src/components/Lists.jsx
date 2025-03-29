/**
 * They help us display similar data.
 *  => We us the javascript array.map/array.flaMap methods to display lists
 */
import React from "react";

const Lists = () => {
  const users = ["Nashib", "Vanessa", "Linda", "Melissa", "Isaac"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={~~(Math.random() * 1000)}>{user}</li>
      ))}
    </ul>
  );
};

export default Lists;
