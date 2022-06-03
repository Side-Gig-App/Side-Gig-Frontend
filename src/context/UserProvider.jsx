import { createContext, useCallback, useEffect, useMemo, useState, useContext } from "react";
import { getCurrentUser, signIn, signUp, signOut } from "../services/users";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    
    const login = async (credentials) => {
        try {
            const user = await signIn(credentials);
            console.log(credentials, 'credentials')
            console.log('USER||', user);
            setUser(user);
            // const output = document.getElementById('cookies')
            // console.log(output, 'output ------');
        } catch (error) {
            throw error;
        }
    };
    
    const signUpUser = async (credentials) => {
        try {
            await signUp(credentials);
           const user =  await signIn(credentials)
            console.log(user, 'user signup function------')
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

    // const state = useMemo(
    //     () => ({ loading, user, logout, login }),
    //     [loading, user, logout, login]
    // );
if(loading) return null

    return (
        <UserContext.Provider value={{ login, logout, signUpUser, user, userEmail, setUserEmail }}>
            { children }
        </UserContext.Provider>
    );
};

export const useCurrentUser = () => {
    const context = useContext(UserContext);

    if (context === undefined)
        throw new Error('use current user must be use with UserProvider');
        return context.user
}

export const useAuth = () => {
    const context = useContext(UserContext);

    if ( context === undefined)
        throw new Error('useAuth mus be used in a userProvider')

        return { logout: context.logout, login: context.login , signUpUser: context.signUpUser};
}