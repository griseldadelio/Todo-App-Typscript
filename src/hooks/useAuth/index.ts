import { AuthContext } from "../../contexts/AuthProvider"
import { firebaseAuth } from '../../utils'
import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom"

const useAuth = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const [user, setUser] = useState({})
    const [authMsgError, setAuthMsgError] = useState(null)
    const history = useHistory()

    const login = async ({ email, password }) => {
        return await firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                setIsAuthenticated(true)
                localStorage.setItem('userToken', user.refreshToken)
                history.go(0)
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

    const register = async ({ email, password, fullName }) => {
        return await firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                user.updateProfile({ displayName: fullName })
            }).catch(e => {
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
                history.push('/')
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        firebaseAuth.auth().onAuthStateChanged((user) => {
            console.log(user)
            const token = localStorage.getItem('userToken');
            if (token && token === user.refreshToken)
                setIsAuthenticated(true)
        })
    }, [isAuthenticated]);

    return { login, register, logout, user, isAuthenticated, authMsgError }
}
export { useAuth }