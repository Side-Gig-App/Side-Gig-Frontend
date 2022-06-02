export const getFavorites = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/favorites`, { 
        credentials: 'include'
        
    });
    console.log(res);
    return res.json();
}