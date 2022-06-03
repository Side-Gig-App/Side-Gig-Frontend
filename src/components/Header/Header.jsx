import styles from './Header.css';
import logo from './SidE.png'
import { NavLink } from 'react-router-dom';
import background from'./side-gig-background.jpg'



export default function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo}/>
            <button >
          <NavLink to='/comparison' className='bm-burger-bars'>Compare Gigs</NavLink>
          </button>
          <button>
          <NavLink to='/goals' className='bm-burger-button'>Goals</NavLink>
          </button>
          <button>
          <NavLink to='/login' className='bm-burger-button'>Sign Out</NavLink>
          </button>
          <button>
          <NavLink to='/favorites' className='bm-burger-button'>Favorites</NavLink>
          </button>
       </header>
      
    );
}