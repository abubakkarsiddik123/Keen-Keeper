"use client";
import { createContext, useState } from "react";

export const FriendsContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  const value = {
    friends,
    setFriends,
  };

  return (
    <div>
      <FriendsContext.Provider value={value}>{children}</FriendsContext.Provider>
    </div>
  );
};

export default ContextProvider;
