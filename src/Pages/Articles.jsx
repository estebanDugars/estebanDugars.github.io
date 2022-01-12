import React from "react";

const styles = {
  /*  div: { width: "250px", display: "inline-block", margin: "0.5rem" },
  span: { marginLeft: "2rem" },
  h1: { margin: "2rem" }, */
  card: { maxWidth: "20rem" },
};

const Articles = ({ data }) => {
  return (
    <>
      <h1 style={styles.h1}>Articles</h1>
      <div className="d-flex flex-row  flex-fill  flex-wrap justify-content-center fs-5 ">
        {data.map((user) => (
          <div>
            <div key={user.id} className="card border-light mb-3" style={styles.card}>
              <div className="card-header">
                {user.first_name + " "}
                {user.last_name}
              </div>
              <div className="card-body">
                <h4 className="card-title">Light card title {user.id}</h4>
                <img src={user.avatar_Url} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;

/* 
  <div key={user.id} style={styles.div}>
          {user.first_name + " "}
          {user.last_name}
          <span style={styles.span}>{user.id}</span>
          <img src={user.avatar_Url} alt="" />
        </div> */
