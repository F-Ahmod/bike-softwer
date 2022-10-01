import intializeFirebase from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";

intializeFirebase();

const useFirebase = () => {
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState("");

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const singinWithGoogle = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history(destination);
        setUser(result.user);
        sessionStorage.setItem("email", result.user.email);

        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        setUser(userCredential.user);

        const destination = location?.state?.from || "/";
        history(destination);
      })
      .catch((error) => {
        console.log(error.message);
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
        //   .then((res) => res.json())
        //   .then((data) => setAdmin(data?.role));
      }
    });
  }, [auth]);

  const leLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        const data = {
          name: result.user.name,
          email: result.user.email,
          uid: result.user.uid,
        };
        saveUser(data);
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  const saveUser = (data) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  console.log(admin);

  return {
    error,
    admin,
    singinWithGoogle,
    user,
    leLogout,
    handleUserRegister,
    loginUser,
    authError,
    loading,
  };
};

export default useFirebase;
