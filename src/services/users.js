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
export const signIn = async ({ email, password}) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ email, password }),
    });

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


// after back is fix look into bug in maybe how user state is being set

