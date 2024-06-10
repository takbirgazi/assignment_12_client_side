import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from './../hooks/useAxiosPublic';



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const upadteUser = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const changePass = (newPass) => {
        setLoading(true);
        return updatePassword(user, newPass)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUSer => {
            setUser(currentUSer);
            if (currentUSer) {
                const userEmail = { email: currentUSer.email }
                axiosPublic.post('/jwt', userEmail)
                    .then(res => {
                        if (res.data) {
                            localStorage.setItem('access-token', res.data)
                        }
                    })
            } else {
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        upadteUser,
        login,
        changePass,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}