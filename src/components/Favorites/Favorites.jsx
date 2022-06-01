import { useEffect, useState } from "react";
import { getFavorites } from "../../services/getFavorites";

export default function FavoritesList() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function getFavoritesFromLoad() {
            const favs = await getFavorites();
            setFavorites(favs);
        }
    getFavoritesFromLoad();
    }, [])
    
console.log('favs', favorites);
    return (
        <>
          {favorites.map((fav) => (
              <ul key={fav.gig_id}>
                  <p>{fav.profiles_id}</p>
              </ul>
          ))}
        </>
    )
}