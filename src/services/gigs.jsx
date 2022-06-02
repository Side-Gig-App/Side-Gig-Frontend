export const getGigs = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/comparison`, { 
        credentials: 'include'
        
    });
    console.log('|||GIGS|||', res);
    return res.json();
}

