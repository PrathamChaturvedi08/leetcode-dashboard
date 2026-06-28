import { createContext, useState } from "react";

import { getToken, saveToken, removeToken } from "../services/tokenService";
import { getUser, saveUser, removeUser } from "../services/storageService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => getToken());

  const [user, setUser] = useState(() => getUser());

  const login = (token, user) => {
    const safeUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      leetcodeUsername: user.leetcodeUsername,
    };

    saveToken(token);
    saveUser(safeUser);

    setToken(token);
    setUser(safeUser);
  };

  const logout = () => {
    removeToken();
    removeUser();

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
