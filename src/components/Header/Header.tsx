import Logotype from "../Logotype/Logotype";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`container ${styles.header__wrapper}`}>
            <Logotype to="/portfolio"/>
            <Navigation />
        </div>
    </header>
  )
}

export default Header