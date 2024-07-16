import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
// import i18n from "i18next";
import { useTranslation } from "react-i18next";


const Navigation = () => {
    const { t } = useTranslation();
    // const changeLanguage = () => {
    //     i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
    // }

    return (
        <nav className={styles.navigation}>

            <ul>
                <li>
                    <NavLink className="navigation_link" to="/">{t("Home")}</NavLink>
                </li>
                <li>
                    <NavLink className="navigation_link" to="/projects">{t("Projects")}</NavLink>
                </li>
                {/* <li>
                    <button className="btn" onClick={changeLanguage}>
                        <span
                            className={`lang-ua ${i18n.language === "ua" ? "selected" : ""}`}
                        >
                            UA
                        </span> / 
                        <span
                            className={`lang-en ${i18n.language === "en" ? "selected" : ""}`}
                        >
                            EN
                        </span>
                    </button>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navigation