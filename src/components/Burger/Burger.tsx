import styles from './Burger.module.css';
import { IBurgerMenu } from '../../typescript/interfaces';

const Burger = (props: IBurgerMenu) => {
	const toggleActive = () => {
		props.toggleBurgerMenu(!props.isOpen);
	};

	return (
		<>
			<div
				className={`${styles.burger_menu} ${props.isOpen ? styles.active : ''}`}
				onClick={toggleActive}
			>
				<span className={styles.burger_menu__lines}></span>
			</div>
		</>
	);
};

export default Burger;
