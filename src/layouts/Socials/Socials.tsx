import { motion } from 'framer-motion';
import { variants } from '../../animations/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { ISocials } from '../../typescript/interfaces';
import classNames from 'classnames';

const Socials = (props: ISocials) => {

    const classes = classNames({
        "socials": true,
        "socials-size-small": props.type === "small",
        "socials-size-standard": props.type === "standard" || props.type === undefined,
        "socials-size-big": props.type === "big",
    })

    return (
        <motion.div
            className={classes}
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
    )
}

export default Socials