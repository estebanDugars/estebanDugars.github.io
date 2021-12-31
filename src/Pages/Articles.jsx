import React from "react";

const styles = {
  div: { width: "250px", display: "inline-block", margin: "0.5rem" },
  span: { marginLeft: "2rem" },
  h1: { margin: "2rem" },
};

const Articles = ({ data }) => {
  return (
    <>
      <h1 style={styles.h1}>Articles</h1>
      {data.map((user) => (
        <div key={user.id} style={styles.div}>
          {user.first_name + " "}
          {user.last_name}
          <span style={styles.span}>{user.id}</span>
          <img src={user.avatar_Url} alt="" />
        </div>
      ))}
    </>
  );
};

export default Articles;
