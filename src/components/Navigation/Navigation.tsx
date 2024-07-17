import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ILink } from "../../typescript/interfaces";

const navLinks: ILink[] = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/portfolio/projects",
        label: "Projects"
    },
    {
        to: "/portfolio/about",
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