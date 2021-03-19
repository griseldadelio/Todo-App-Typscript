import React, { FC, useState, createContext, Dispatch, SetStateAction } from 'react'

type ContextType = {
    isAuthenticated?: boolean,
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
}

const AuthContext = createContext<ContextType>({ setIsAuthenticated: () => false })

const AuthProvider: FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, AuthContext }
