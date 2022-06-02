import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getGigs } from "../../services/gigs";


export default function GigsList() {
    const { id } = useParams();
    const [gigsArray, setGigsArray] = useState([]);

    

    useEffect(() => {
        async function getGigsFromLoad() {
            const gigs = await getGigs();
            setGigsArray(gigs);
      }
    getGigsFromLoad();
    }, [])


    async function favHandler(gigID, profiles_id) {
        // console.log(e.target.value)
        console.log(gigID);
        await fetch(`${process.env.API_URL}/api/v1/favorites`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify({
              is_favorite: true,
              gig_id: gigID,
              profiles_id,
            }),
          })
    }

    
    
    return (
        <>
            {gigsArray.map((gig) => (
                <ul key={gig.gig_id}>
                    <p>{gig.gig_name}</p>
                    <p>{gig.salary_hourly}</p>
                    <p>{gig.third_party_link}</p>
                    <button onClick={() => favHandler(gig.gig_id, gig.profiles_id)}>Add To Favorites</button>
                    <Link to={`/gigs/${gig.gig_id}`}>
                    <button>More Info</button>
                    </Link>
                    </ul>
            ))}
        </>
    )
}