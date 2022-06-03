import { useEffect, useState } from "react";
import { getFavorites } from "../../services/getFavorites";
import styles from './Favorites.css'

export default function FavoritesList() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function getFavoritesFromLoad() {
            const favs = await getFavorites();
            console.log(favs, 'favs');
            setFavorites(favs);
        }
    getFavoritesFromLoad();
    }, [])
    
console.log('favs', favorites);
    return (
        <>
          {favorites.map((fav) => (
              <div className={styles.favCard}>
              <ul key={fav.gig_id}>

                  <section className={styles.textBlock}>
                  <p className={styles.textBlock}>Gig: {fav.gig_name}</p>
                  <p className={styles.textBlock}>Hourly Pay: ${fav.salary_hourly}</p>
                  <p className={styles.textBlock}>{fav.third_party_link}</p>
                  </section>
               
                  <button className={styles.button}>Sign Up for {fav.gig_name} 
                  </button>
                 
              </ul>
              </div>
          ))}
        </>
    )
}