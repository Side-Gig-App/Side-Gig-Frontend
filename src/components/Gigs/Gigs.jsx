import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";
import { getGigs } from "../../services/gigs";

// import { matchGigs } from "../../services/users";

import styles from './Gigs.css'




export default function GigsList() {
    const user = useCurrentUser()
    // console.log(user.profiles_id, 'usererrrr give us INFO');
    const { id } = useParams();
    const [gigsArray, setGigsArray] = useState([]);

    

    useEffect(() => {
        async function getGigsFromLoad() {
            const gigs = await getGigs();
            setGigsArray(gigs);
            // const apiData = await matchGigs({ gig_name: 'uber' })
            // console.log(apiData, 'thisbis data from, apI');
            // const newArr = gigsArray.map((gig) => {
            //     [ ...gig, gig.salary_hourly: apiData  ]
            // })
      }
    getGigsFromLoad();
    }, [])


    async function favHandler(gigID) {
        // console.log(e.target.value)
        console.log(user.profiles_id, 'profiles infor ');
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
              <div className={styles.gigCard}>
                <ul key={gig.gig_id}>

                  <section className={styles.gigText}>
                    <p className={styles.textBlock}>Gig: {gig.gig_name}</p>
                    <p className={styles.textBlock}>Hourly Pay: ${gig.salary_hourly}</p>
                    <p className={styles.textBlock}>{gig.third_party_link}</p>
                    </section>

                    <button className={styles.button}onClick={() => favHandler(gig.gig_id)}>Add To Favorites</button>

                    <Link to={`/gigs/${gig.gig_id}`}>
                    <button className={styles.button}>More Info</button>
                    </Link>
                    </ul>
                    </div>
            ))}
        </>
    )
}