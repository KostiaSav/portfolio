import { Link } from "react-router-dom"
import styles from "./Logotype.module.css";

const Logotype = () => {
    return (
        <Link to="/">
            <h2 className={styles.logotype}><span className={styles.logotype_left}>Frontend.</span> <span className={styles.logotype_right}>Portfolio.</span></h2>
        </Link>
    )
}

export default Logotype