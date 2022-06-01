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

    const addGoal = async (e) => {
        e.target.value();
        // const entry 
    } 
    return (
        <>
          <h3>Goals Page</h3>
          {goals.map((goal) => (
              <ul key={goal.goal_id}>
                  <p>{goal.goal_amount}</p>
                  <p>{goal.gol_accomplished}</p>
              </ul>
          ))}
          <div>
              <form>
                  <input 
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  />
                  <button 
                  type='submit'
                  >Submit Goal
                  </button>
              </form>
          </div>
        </>
    )
}