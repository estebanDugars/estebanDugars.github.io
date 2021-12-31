import React from "react";

const styles = {
  div: { width: "250px", display: "inline-block", margin: "0.5rem" },
  span: { marginLeft: "2rem" },
  h1: { margin: "2rem" },
};

const CMS = ({ userscomments }) => {
  return (
    <>
      <h1 style={styles.h1}>CMS</h1>
      {userscomments.map((user) => (
        <div key={user.id} style={styles.div}>
          {user.username}
          <span style={styles.span}>{user.id}</span>
        </div>
      ))}
    </>
  );
};

export default CMS;
