import React from "react";

function CustomAvatar({user}) {
  return (
    <div>
      <img
        src={`http://localhost:8080/users/images/${user.image}`}
        alt={user.name}
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
    </div>
  );
}

export default CustomAvatar;
