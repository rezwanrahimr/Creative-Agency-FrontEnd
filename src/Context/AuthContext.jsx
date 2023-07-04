import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContexts = createContext();
// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const auth = getAuth(app);

  // Create user using email and password
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login with email and password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const data = { createUserWithEmail, loginWithEmail };
  return (
    <>
      <AuthContexts.Provider value={data}>{children}</AuthContexts.Provider>;
    </>
  );
};

export default AuthContext;
