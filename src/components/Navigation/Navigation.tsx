import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ILink, INavigation } from '../../typescript/interfaces';
import { motion } from 'framer-motion';
import { variants } from '../../animations/Animations';

const navLinks: ILink[] = [
	{
		to: '/',
		label: 'Home',
	},
	{
		to: '/projects',
		label: 'Projects',
	},
	{
		to: '/about',
		label: 'About',
	},
	{
		to: '/reviews',
		label: 'Reviews',
	},
];

const Navigation = ({ isOpen }: INavigation) => {
	const { t } = useTranslation();

	return (
		<nav className={`${styles.navigation} ${isOpen ? styles.active : ''}`}>
			<ul>
				{navLinks.map((link, index) => (
					<motion.li
						initial='top'
						animate='standardY'
						variants={variants}
						transition={{ duration: 1, delay: index * 0.2 }}
						key={index}
					>
						<NavLink className='navigation_link' to={link.to ? link.to : '/'}>
							{link.label ? t(link.label) : t('Home')}
						</NavLink>
					</motion.li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
