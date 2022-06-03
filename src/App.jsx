import Authenticate from './views/Users/Auth';
import { Redirect, Route, Link, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import GigsList from './components/Gigs/Gigs';
import GigDetail from './components/Gigs/GigDetail';
import FavoritesList from './components/Favorites/Favorites';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GoalsList from './components/Goals/Goals';
import { slide as Menu } from 'react-burger-menu';
import styles from './App.css';



export default function App() {

 

  return (

    <UserProvider>
    <Router>
    <Header />
    {/* <button className={styles.bmburgerbutton}>Nav</button> */}
    {/* <Menu className={styles.menu} width={280} height={200}>
        <section>
      
      
          <button >
          <NavLink to='/comparison' className='bm-burger-bars'>Compare Gigs</NavLink>
          </button>
          <button>
          <NavLink to='/goals' className='bm-burger-button'>Goals</NavLink>
          </button>
          <button>
          <NavLink to='/login' className='bm-burger-button'>Sign Out</NavLink>
          </button>
        </section>
        </Menu> */}
    
   
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
