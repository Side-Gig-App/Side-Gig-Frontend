import { useEffect, useState } from "react";
import { getFavorites } from "../../services/getFavorites";
import { deleteFavorite } from "../../services/users";
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
              <ul key={fav.gig_id}>
                  <p>{fav.gig_name}</p>
                  <p>Hourly Pay: ${fav.salary_hourly}</p>
                  <p>{fav.third_party_link}</p>
                  <button>Sign Up for {fav.gig_name}</button>
                  <button onClick={deleteFavorite}>Delete from favorites</button>
              </ul>
          ))}
        </>
    )
}