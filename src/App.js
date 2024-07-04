import React, { useState } from "react";
import "./App.css";
import UserDetails from "./component/UserDetails";
import UserList from "./component/UserList";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <div>
        <UserList onSelectUser={handleSelectUser} />
      </div>
      <div>
        <UserDetails user={selectedUser} />
      </div>
    </div>
  );
};

export default App;
