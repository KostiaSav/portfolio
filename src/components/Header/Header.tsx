import { useState } from 'react';
import Burger from '../Burger/Burger';
import Logotype from '../Logotype/Logotype';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<header className={styles.header}>
			<div className={`container ${styles.header__wrapper}`}>
				<Logotype to='/' />
				<Navigation isOpen={isOpen} />
				<Burger isOpen={isOpen} toggleBurgerMenu={setOpen} />
			</div>
		</header>
	);
};

export default Header;
