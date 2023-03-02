import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dataId, setDataId] = useState("");
  let getToken = localStorage.getItem("token");
  useEffect(() => {
    if (getToken) {
      const decode_Token = jwtDecode(getToken);
      if (decode_Token) {
        setUser(decode_Token);
        console.log(user);
      }
    }
  }, [getToken]);
  return (
    <AuthContext.Provider value={{ user, setUser, dataId, setDataId }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
