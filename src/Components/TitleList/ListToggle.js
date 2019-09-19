import React, { useState } from "react";

export default function ListToggle() {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!true);
  }

  return (
    <div onClick={handleClick} data-toggled={toggled} className="ListToggle">
      <div>
        <i className="fa fa-fw fa-plus"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
}
