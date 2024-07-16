import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';

type Inputs = {
    name: string,
    surname: string,
    type: string,
    budget: number,
    telegram: string,
    email: string,
    message: string,
};

const Contact = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const {t}  = useTranslation();
    return (
        <section className={styles.contact__wrapper}>
            <div className="container">
                <div className={styles.contact}>

                    <form action="#" className={styles.form__contact} method="post" onSubmit={handleSubmit(onSubmit)}>
                        <h1>{t("Fill in the feedback form")}</h1>
                        <div className={styles.form_contact__list}>
                            <label>
                                {t("Name")} *
                                <input {...register("name", { required: true })} placeholder={t("Name")} />
                            </label>

                            <label>
                                {t("Surname")} *
                                <input {...register("surname", { required: true })} placeholder={t("Surname")} />
                            </label>

                            <label>
                                {t("Type Site")} *
                                <select {...register("type", { required: true })}>
                                    <option value="Landing page">{t("Landing page")}</option>
                                    <option value="Business card website">{t("Business card website")}</option>
                                    <option value="Personal website">{t("Personal website")}</option>
                                    <option value="Corporate website">{t("Corporate website")}</option>
                                    <option value="Online stores">{t("Online stores")}</option>
                                </select>
                            </label>

                            <label>
                                {t("Budget")} (USD) *
                                <input {...register("budget", { required: true })} type="number" placeholder={t("Budget")} />
                            </label>

                            <label>
                                {t("Email")} *
                                <input {...register("email", { required: true })} type="email" placeholder={t("Email")} />
                            </label>

                            <label>
                                {t("Telegram")}
                                <input {...register("telegram")} placeholder={t("Telegram")} />
                            </label>


                            <label style={{
                                flexBasis: "100%"
                            }}>
                                {t("Message")}
                                <textarea {...register("message", {required: true})} placeholder={t("Message")} />
                            </label>

                            <button type="submit" className='btn btn-red' style={{
                                padding: "15px 60px"
                            }}>{t("Submit")}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact