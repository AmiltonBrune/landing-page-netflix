import React from "react";

import ProfileIcon from "../Assets/user.svg";

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">Amilton Brune</div>
        <div className="image">
          <img src={ProfileIcon} alt="profile" />
        </div>
      </div>
    </div>
  );
}
