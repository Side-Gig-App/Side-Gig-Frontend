import { data } from '../utils/data';

export const getCurrentUser = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
            credentials: 'include',
        });

        return res.json();
    } catch (error) {
        return null;
    }
};

export const signUp = async ({ email, password }) => {
    console.log('sign up------')
    const res = await fetch(`${process.env.API_URL}/api/v1/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error('Invalid Username or Password');

    return res.json();
}

// username or password here?
export const signIn = async ({ email, password }) => {
    console.log('sign in ------function')
    const res = await fetch(`${process.env.API_URL}/api/v1/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ email, password }),
       
    });
    insertAllGigs();

    if (!res.ok) throw new Error('Invalid Username or Password');

    return res.json();
};

export const signOut = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
        method: 'DELETE',
        credentials: 'include',
        mode: 'cors',
    });

    return res.ok;
};

const insertAllGigs = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/comparison`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ data }),

    }
    );
    return res.body
}
    

// after back is fix look into bug in maybe how user state is being set

