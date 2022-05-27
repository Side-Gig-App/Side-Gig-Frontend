import { useEffect, useState } from "react";
import { getGigs } from "../../services/gigs";

export default function GigsList() {
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
                <ul key={gig.gig_id}><p>{gig.gig_name}</p><p>{gig.salary_hourly}</p><p>{gig.third_party_link}</p><button>More Info</button></ul>
            ))}
        </>
    )
}