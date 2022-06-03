import { useEffect, useState} from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getGigs } from "../../services/gigs"
import styles from './GigDetail.css'



export default function GigDetail(){
const [gigId, setGigId] = useState({})
const { id } = useParams()


    useEffect(() => {
        async function getGigsOnLoad() {
            // console.log(gig)
            const gigInfo = await getGigs()
            console.log(gigInfo)
            const results = gigInfo.filter(gig => gig.gig_id === id) 
               console.log(results)
               setGigId(results)
               
        }
        getGigsOnLoad()
}, [])
console.log(gigId[0])
    return (
        <>
        <div className={styles.detailCard}>
            <section className={styles.detailText}>
        <h1 className={styles.textBlock}>{gigId[0]?.gig_name}</h1>
        <h2 className={styles.textBlock}>{gigId[0]?.salary_hourly}</h2>
        <h3 className={styles.textBlock}>{gigId[0]?.third_party_link}</h3>
        </section>
        </div>
        </>
    )
}