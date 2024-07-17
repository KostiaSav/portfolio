import i18n from "i18next";

const ChangerLanguage = () => {

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
    }

    return (
        <li>
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
        </li>
    )
}

export default ChangerLanguage