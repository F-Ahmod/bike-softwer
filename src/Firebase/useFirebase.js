import intializeFirebase from "../Firebase/Firebase.init";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import firebase from 'firebase';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const app = intializeFirebase();

const storage = getStorage(app);
const useFirebase = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

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
      }
      fetch(`https://bike-soft.herokuapp.com/checkAdmin/${user?.email}`)
        .then((data) => data.json())
        .then((res) => {
          setAdmin(res);
        });
    });
  }, [auth]);

  const Logout = () => {
   
    signOut(auth)
      .then(() => {
        setUser({});
      })

      .catch((err) => {
        // console.log(err);
      })

      .finally(() => setLoading(false));
    return navigate("/login");
  };

  const handleUserRegister = (name, email, password) => {
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
    fetch("https://bike-soft.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => result);
  };

  // console.log(admin);

  return {
    error,
    admin,
    singinWithGoogle,
    user,
    Logout,
    handleUserRegister,
    loginUser,
    authError,
    loading,
    storage,
  };
};

export default useFirebase;
