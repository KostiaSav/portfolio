import Socials from '../../layouts/Socials/Socials';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <p>Copyright &copy; 2024</p>
            <Socials type="small" />
        </div>
    </footer>
  )
}

export default Footer