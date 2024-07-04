import React from "react";

const UserDetails = ({ user }) => {
  if (!user) {
    return <div className="details">Select user to see the details</div>;
  }

  return (
    <div className="details">
      <img src={user.avatar} alt="" />
      <h2>
        Name : {user.profile.firstName} {user.profile.lastName}
      </h2>
      <p>Bio : {user.Bio}</p>
      <p>Username : {user.profile.username}</p>
      <p>Email: {user.email}</p>
      <p>CreatedAt: {user.createdAt}</p>
    </div>
  );
};

export default UserDetails;
