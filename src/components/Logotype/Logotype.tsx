import { Link } from "react-router-dom"
import styles from "./Logotype.module.css";
import { ILogotype } from "../../typescript/interfaces";

const Logotype = (props: ILogotype) => {
    return (
        <Link to={props.to ? props.to : "/"}>
            <h2 className={styles.logotype}><span className={styles.logotype_left}>Frontend.</span> <span className={styles.logotype_right}>Portfolio.</span></h2>
        </Link>
    )
}

export default Logotype