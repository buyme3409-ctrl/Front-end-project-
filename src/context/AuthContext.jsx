import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // simple demo auth
        if (username === "admin" && password === "1234") {
            setUser({ username });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;