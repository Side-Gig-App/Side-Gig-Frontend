import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getGigs } from "../../services/gigs";


export default function GigsList() {
    const { id } = useParams();
    const [gigsArray, setGigsArray] = useState([]);

    useEffect(() => {
        async function getGigsFromLoad() {
            const gigs = await getGigs();
            console.log('|||COMPONETN', gigs);
            setGigsArray(gigs);
      }
    getGigsFromLoad();
    }, [])
    
    return (
        <>
            {gigsArray.map((gig) => (
                <ul key={gig.gig_id}>
                    <p>{gig.gig_name}</p>
                    <p>{gig.salary_hourly}</p>
                    <p>{gig.third_party_link}</p>
                    <Link to={`/gigs/${gig.gig_id}`}>
                    <button>More Info</button>
                    </Link>
                    </ul>
            ))}
        </>
    )
}