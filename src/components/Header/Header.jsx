import styles from './Header.css';
import logo from './SidE.png'



export default function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo}/>
            <hr />
        </header>
    );
}