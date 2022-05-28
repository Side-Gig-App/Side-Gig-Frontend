import Authenticate from './views/Users/Auth';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import GigsList from './components/Gigs/Gigs';
import GigDetail from './components/Gigs/GigDetail';


export default function App() {
  return (
    <UserProvider>
    <Router>
    <Switch>
    <Route exact path='/login'>
      <Authenticate />
    </Route>
    <Route path='/comparison'>
      <GigsList />
    </Route>
    <Route exact path='/gigs/:id'>
      <GigDetail />
    </Route>
    </Switch>
    </Router>
    </UserProvider>
  )
}
