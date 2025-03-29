/**
 * we pass events in camel case.
 * Occurs when even handlers catch events from the children
 * => When we click the button in the div, both events are gonna be
 *  triggered woth the event of the child (button) triggered first.
 */

import React from "react";
import Button from "./Button";

const Events = () => {
  const onClickDiv = (event) => {
    event.stopPropagation();
    console.log("Div clicked");
  };

  const onClickBtn = (event) => {
    event.stopPropagation();
    console.log("Btn Clicked");
  };

  return (
    <>
      <h2>Event bubbling</h2>
      <div
        onClick={onClickDiv}
        style={{
          backgroundColor: "#f00",
          padding: 20,
        }}
      >
        <Button label={"Click me"} handleClick={onClickBtn} />
      </div>
    </>
  );
};

export default Events;
