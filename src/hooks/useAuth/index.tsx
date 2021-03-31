import { AuthContext } from "../../contexts/AuthProvider"
import { firebaseAuth } from '../../utils'
import { useState, useContext } from 'react';

const useAuth = () => {
    const [authMsgError, setAuthMsgError] = useState<string | null>(null);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);

    const login = async (email: string, password: string) => {
        return await firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then((response: firebaseAuth.auth.UserCredential) => {
                setUser(response.user)
                setIsAuthenticated(true)
                if (response.user) localStorage.setItem('userToken', response.user.refreshToken)
            }).catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                    case "auth/wrong-password": setAuthMsgError('La contraseña es incorrecta o el usuario no está registrado')
                        break
                }
            })
    }

    const register = async (email: string, password: string, fullName: string) => {
        return await firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then((response: firebaseAuth.auth.UserCredential) => {
                setUser(response.user);
                response?.user?.updateProfile({ displayName: fullName });
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                }
            })
    }

    const logout = () => {
        firebaseAuth.auth().signOut()
            .then(() => {
                alert('Te has deslogueado exitosamente')
                localStorage.removeItem("userToken");
                setIsAuthenticated(false);
            }).catch((error) => {
                console.log(error)
            })
    }

    return { login, register, logout, authMsgError }
}
export { useAuth }