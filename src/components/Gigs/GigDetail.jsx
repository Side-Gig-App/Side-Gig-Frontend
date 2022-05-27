
export default function GigDetail({ gig }){
    return (
        <><h1>{gig.gig_name}</h1>
        <h2>{gig.salary_hourly}</h2>
        <p>{gig.third_party_link}</p>
        </>
    )
}