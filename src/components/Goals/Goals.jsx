import { useEffect, useState } from "react";
import { getGoals } from "../../services/getGoals";

export default function GoalsList() {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        async function getGoalFromLoad() {
            const fetchedGoals = await getGoals();
            setGoals(fetchedGoals);
        }
        getGoalFromLoad();
    }, [])

    return (
        <>
          <h3>Goals Page</h3>
        </>
    )
}