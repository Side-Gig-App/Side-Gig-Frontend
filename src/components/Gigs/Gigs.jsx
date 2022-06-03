import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";
import { getGigs } from "../../services/gigs";
import { getFavorites } from "../../services/getFavorites";



export default function GigsList() {
    const user = useCurrentUser()
    // console.log(user.profiles_id, 'usererrrr give us INFO');
    const [gigsArray, setGigsArray] = useState([]);
    // const [favorites, setFavorites] = useState([]);

    // useEffect(() => {
    //     async function getFavoritesFromLoad() {
    //         const favs = await getFavorites();
    //         console.log(favs, 'favs');
    //         setFavorites(favs);
    //     }
    // getFavoritesFromLoad();
    // }, [])

    

    useEffect(() => {
        async function getGigsFromLoad() {
            const gigs = await getGigs();
            setGigsArray(gigs);
            console.log(gigs);
      }
    getGigsFromLoad();
    }, [])

    async function favHandler(gigID) {
        // console.log(e.target.value)
        console.log(user, 'profiles infor ');
        const res = await fetch(`${process.env.API_URL}/api/v1/favorites`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify({
              is_favorite: true,
            //   profiles_id: user.profiles_id,
              gig_id: gigID,
            }),
        })
        console.log(res, 'this is the information from the fav body');
        return res.body
    }
    
    return (
        <>
            {gigsArray.map((gig) => (
                <ul key={gig.gig_id}>
                    <p>{gig.gig_name}</p>
                    <p>{gig.salary_hourly}</p>
                    <p>{gig.third_party_link}</p>
                    {/* <p>{favorites.gig_id && 'In favorites'}</p> */}
                    <button onClick={() => favHandler(gig.gig_id)}>Add</button>
                    <Link to={`/gigs/${gig.gig_id}`}>
                    <button>More Info</button>
                    </Link>
                    </ul>
            ))}
        </>
    )
}