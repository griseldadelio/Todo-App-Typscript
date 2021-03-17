import React, { FC, useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider: FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, AuthContext }