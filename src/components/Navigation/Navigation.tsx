import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ILink } from "../../typescript/interfaces";

const navLinks: ILink[] = [
    {
        to: "/portfolio",
        label: "Home"
    },
    {
        to: "/projects",
        label: "Projects"
    },
    {
        to: "/about",
        label: "About"
    }

]

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <nav className={styles.navigation}>

            <ul>
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink className="navigation_link" to={link.to ? link.to : "/"}>{link.label ? t(link.label) : t("Home")}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigation