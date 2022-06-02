import { useEffect, useState } from "react";
import { getGoals } from "../../services/getGoals";
import { goalAddition } from "../../services/users";

export default function GoalsList() {
    const [goals, setGoals] = useState([]);
    const [goalInput, setGoalsInput] = useState('');

    useEffect(() => {
        async function getGoalFromLoad() {
            const fetchedGoals = await getGoals();
            setGoals(fetchedGoals);
        }
        getGoalFromLoad();
    }, [goals])

    const addGoal = async (e) => {
        e.preventDefault();
        // e.target.value();
        // const entry 
        console.log(goalInput);
        goals.push({
            goal_id: 1,
            goal_amount: goalInput,
            goal_accomplished: false
        })
        console.log(goals);
        // await goalAddition(goalInput)
    } 
    return (
        <>
          <h3>Goals Page</h3>
          {goals.map((goal) => (
              <ul key={goal.goal_id}>
                  <p>{goal.goal_amount}</p>
                  <p>{goal.goal_accomplished}</p>
              </ul>
          ))}
          <div>
              <form onSubmit={addGoal}>
                  <input 
                  value={goalInput}
                  onChange={(e) => setGoalsInput(e.target.value)}
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