export const getFavorites = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/favorites`);
    console.log(res);
    return res.json();
}