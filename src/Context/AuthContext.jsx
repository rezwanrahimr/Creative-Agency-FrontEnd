import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContexts = createContext();
// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  // Create user using email and password
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login with email and password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, [auth]);

  // LogOut
  const logOut = () => {
    return signOut(auth);
  };

  // Update Profile
  const profileUpdate = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const data = {
    user,
    createUserWithEmail,
    loginWithEmail,
    logOut,
    profileUpdate,
  };
  return (
    <>
      <AuthContexts.Provider value={data}>{children}</AuthContexts.Provider>;
    </>
  );
};

export default AuthContext;
