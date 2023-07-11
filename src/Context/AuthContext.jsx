import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContexts = createContext();
// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);

  // Create user using email and password
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login with email and password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login or Sign Up with Google

  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // User
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        setIsLoading(false);
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
    isLoading,
    user,
    createUserWithEmail,
    loginWithEmail,
    googleLogin,
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
