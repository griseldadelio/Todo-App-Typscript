import React, { useContext } from 'react';
import { Public, Private } from '..'
import { AuthContext } from '../../contexts/AuthProvider';


const AuthRoute = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div>
            {/* { isAuthenticated ? <Private /> : <Public />} */}
            <Private />
        </div>
    );
}

export { AuthRoute };