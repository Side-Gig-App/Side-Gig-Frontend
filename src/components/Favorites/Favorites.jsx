import { useEffect, useState } from "react";
import { getFavorites } from "../../services/getFavorites";

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
              </ul>
          ))}
        </>
    )
}