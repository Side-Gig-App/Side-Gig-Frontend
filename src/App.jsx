import Authenticate from './views/Users/Auth';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import GigsList from './components/Gigs/Gigs';
import GigDetail from './components/Gigs/GigDetail';
import FavoritesList from './components/Favorites/Favorites';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GoalsList from './components/Goals/Goals';
// import { slide as Burger, SubMenu, Item } from 'burger-menu';
// import 'burger-menu/lib/index.css';


export default function App() {
 

  return (

    <UserProvider>
          <Header />
    <Router>
    <Switch>
    <Route exact path='/login'>
      <Authenticate />
    </Route>
    <PrivateRoute exact path='/comparison'>
      <GigsList />
    </PrivateRoute>
    <PrivateRoute exact path='/gigs/:id'>
      <GigDetail />
    </PrivateRoute>
    <PrivateRoute exact path='/goals'>
      <GoalsList />
    </PrivateRoute>
    <PrivateRoute exact path='/favorites'>
      <FavoritesList />
    </PrivateRoute>

    </Switch>
    </Router>
    </UserProvider>
  
  )
}
