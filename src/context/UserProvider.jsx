import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getCurrentUser, signIn, signOut } from "../services/users";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const login = async (credentials) => {
        try {
            const user = await signIn(credentials);
            setUser(user);
        } catch (error) {
            throw error;
        }
    };

    const logout = useCallback(() => {
        signOut().then(() => setUser(null));
    }, []);

    useEffect(() => {
        getCurrentUser()
          .then(setUser)
          .finally(() => setLoading(false));
    }, []);

    const state = useMemo(
        () => ({ loading, user, logout, login }),
        [loading, user, logout, login]
    );

    return (
        <UserContext.Provider value={state}>
            {renderView({ ...state, children })}
        </UserContext.Provider>
    );
};

