import './App.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import { variants } from './animations/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons";

function App() {

  const { t } = useTranslation();

  return (
    <>
      <section className='hero'>
        <div className="container">
          <h1 className='hero_title text-write'>{t("PORTFOLIO")}</h1>
          <h2 className='hero_title'>{t("Kostiantyn P.")}</h2>
          <h2 className='hero_title'>{t("Frontend Developer")}</h2>
          <div style={{
            textAlign: 'center'
          }}>
            <Link to={'/projects'}>
              <button
                className='btn btn-arrow'
                style={{
                  marginTop: "20px",
                  padding: '15px 45px 15px 15px'
                }}

              >
                {t('Go to projects')}
              </button>
            </Link>
          </div>

          <motion.hr

            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}

            style={{ margin: "20px auto" }}
          />


          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            HTML, CSS, JavaScript, Wordpress, PHP, Wordpress, Laravel
          </motion.p>

          <motion.div 
            className="socials"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <a href="https://github.com/KostiaSav">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61557404589071">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="https://t.me/developerKostya">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default App
