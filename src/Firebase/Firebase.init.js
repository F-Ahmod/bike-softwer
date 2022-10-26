import {initializeApp}from 'firebase/app';
import firebaseConfig from './Firebase.config';
//  import { getStorage } from "firebase/storage"


const initializeAuthentication =() =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

// export const storage = getStorage(initializeAuthentication);