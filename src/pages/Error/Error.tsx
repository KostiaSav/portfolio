import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import Header from "../../components/Header/Header"
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";

const Error = () => {

    const error = useRouteError();
    const {t} = useTranslation();
    const navigate = useNavigate();
    let status: number = 0;
    if (isRouteErrorResponse(error)) {
        status = error.status;
    }

    return (
        <>
            <Header />
            <section className="error_page container">
                <h1>{t("ERROR")} {status ? status : ""}</h1>
                <button className="btn" onClick={() => navigate(-1)}>{t("RETURN")}</button>
            </section>
            <Footer />
        </>
    )
}

export default Error