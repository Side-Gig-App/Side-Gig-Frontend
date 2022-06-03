export const getGoals = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/goals`, { 
        credentials: 'include'
        
    });
    return res.json();
}