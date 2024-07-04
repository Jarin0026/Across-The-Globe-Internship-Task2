import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        {" "}
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="heading">User Lists</h1>
      <div>
        {users.map((user) => (
          <div className="userLists" onClick={() => onSelectUser(user)}>
            <img src={user.avatar} alt="image" />
            <div>
              {user.profile.username} <br /> {user.jobTitle}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
