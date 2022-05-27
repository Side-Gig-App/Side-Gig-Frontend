import Authenticate from './views/Users/Auth';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';


export default function App() {
  return (
    <UserProvider>
    <Router>
    <Switch>
    <Route exact path='/login'>
      <Authenticate />
    </Route>
    </Switch>
    </Router>
    </UserProvider>
  )
}
