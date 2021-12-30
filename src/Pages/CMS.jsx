import React from "react";

const CMS = ({ userscomments }) => {
  return (
    <>
      <h1>CMS</h1>
      {userscomments.map((user) => (
        <div key={user.id}>
          {user.username}
          <span>{user.id}</span>
        </div>
      ))}
    </>
  );
};

export default CMS;
