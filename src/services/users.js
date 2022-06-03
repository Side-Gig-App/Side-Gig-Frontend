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
export const goalAddition = async (goal) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/goals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(goal),
    });
    if (!res.ok) throw new Error('Invalid Username or Password');

    return res.json();
}

// username or password here?
export const signIn = async ({ email, password }) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ email, password }),
        
    });

    // let arr =[];
    // const arr1 = insertAllGigs();
    // arr.push(arr1)

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
    await Promise.all(data.map((gig) => {

        const res = fetch(`${process.env.API_URL}/api/v1/comparison`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify(gig),
    
        }
        );
        return res.body
    })
)}

export const updateGoal = async (goal) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/goals`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(goal),

    })
    return res.body
}

export const matchGigs = async (gig_name) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/comparison/gigs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(gig_name),

    })
    return res.body
}
    
export const deleteFavorite = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/favorites`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(),

    })
    return res.body
}

// after back is fix look into bug in maybe how user state is being set

