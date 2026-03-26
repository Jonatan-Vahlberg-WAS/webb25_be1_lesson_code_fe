/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react"
import {login} from "../api/auth"
const defaultState = {
    user: null,
    accessToken: null,
    actions: {
        login: (loginData = { email: "", password: ""}) => new Promise(),
        logout: () => {}
    }
}

const AuthContext = createContext(defaultState)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(defaultState.user)
    const [accessToken, setAccessToken] = useState(defaultState.accessToken)

    console.log(user, accessToken)

    const _login = async (loginData) => {
        const response = await login(loginData)
        setUser(response.user)
        setAccessToken(response.accessToken)
    }
    
    const _logout = () => {
        setUser(defaultState.user)
        setAccessToken(defaultState.accessToken)
    }

    return (
        <AuthContext.Provider value={{
            user,
            accessToken,
            actions: {
                login: _login,
                logout: _logout
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const auth = useContext(AuthContext)

    return auth
}
