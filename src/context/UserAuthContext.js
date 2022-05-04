import {createContext, useContext, useState, useEffect} from "react" 
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser

} from "firebase/auth"
import { auth } from "../context/firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
           unsubscribe();
        }
    }, [])
    return <UserAuthContext value={{user,signUp}}> {children} </UserAuthContext>
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}