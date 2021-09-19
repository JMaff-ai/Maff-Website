import React from "react";

function MenuItem(props) {
  return (
    <div>
      <h3>
        {props.name}, ${props.price}
      </h3>
      <p>{props.children}</p>
    </div>
  )
}

export default MenuItem;