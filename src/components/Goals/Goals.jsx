import { useCallback, useEffect, useState } from "react";
import { getGoals } from "../../services/getGoals";
import { goalAddition, updateGoal } from "../../services/users";

export default function GoalsList() {
    const [goals, setGoals] = useState([]);
    const [goalInput, setGoalsInput] = useState('');
    const [bool, setBool] = useState(false)

    const callBack = useCallback(() => {

        async function getGoalFromLoad() {
            const fetchedGoals = await getGoals();
            setGoals(fetchedGoals);
        }
      
        getGoalFromLoad();
    }, [])

    useEffect(() => {

        async function getGoalFromLoad() {
            const fetchedGoals = await getGoals();
            setGoals(fetchedGoals);
        }
      
        getGoalFromLoad();
    }, [])

  async function updateGoalHandler(goal_id) {
      setBool(prevCheck => !prevCheck)
      await updateGoal({ goal_id, goal_accomplished: bool })
callBack()

}

    const addGoal = async (e) => {
        e.preventDefault();


        // e.target.value();
        // const entry 
     
    //  goals.push({
    //         goal_id: 1,
    //         goal_amount: goalInput,
    //         goal_accomplished: false
    //     })
        // console.log(goals);
        await goalAddition({ goal_amount: goalInput, goal_accomplished:false })
      callBack()
    } 
    return (
        <>
          <h3>Goals Page</h3>
       
          <div>
              <form onSubmit={addGoal}>
                  <input
                  type='number'
                  value={goalInput}
                  onChange={(e) => setGoalsInput(e.target.value)}
                  />
                  <button 
                  type='submit'
                  >Submit Goal
                  </button>
              </form>
          </div>
         
          <div>
          {goals.map((goal) => (
              <ul key={goal.goal_id}>
                  <p>Goal Amount: {goal.goal_amount}</p>
                  <p>Accomplished: {goal.goal_accomplished ? 'true' : 'false'}</p>
                  <button onClick={() => updateGoalHandler(goal.goal_id)}>{goal.goal_accomplished ? 'Goal Not Finished' : 'Goal Finished'}</button>
              </ul>
          ))}
          </div>
        </>
    )
}