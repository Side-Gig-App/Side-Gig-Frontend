import { useEffect, useState} from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getGigs } from "../../services/gigs"



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
        
        <h1>{gigId[0]?.gig_name}</h1>
        <h2>{gigId[0]?.salary_hourly}</h2>
        <p>{gigId[0]?.third_party_link}</p>
        </>
    )
}