import styles from './Header.css';
import logo from './SidE.png'
import { NavLink } from 'react-router-dom';

export default function Header(){

    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo}/>

            <div className={styles.buttonDiv}>
            <button className={styles.button}>
          <NavLink to='/comparison' className='bm-burger-bars'>Gigs</NavLink>
          </button>

          <button className={styles.button} >
          <NavLink to='/goals' className='bm-burger-button'>Goals</NavLink>
          </button>

          <button className={styles.button} >
          <NavLink to='/favorites' className='bm-burger-button'>Favs</NavLink>
          </button>

          <button className={styles.button} >
          <NavLink to='/login' className='bm-burger-button'>LogOut</NavLink>
          </button>
          </div>
       </header>
    );
}