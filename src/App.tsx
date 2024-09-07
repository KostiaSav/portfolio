import './App.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { variants } from './animations/Animations';
import Socials from './layouts/Socials/Socials';
import { ISkill } from './typescript/interfaces';
import FreelanceHuntList from './components/FreelanceHuntList/FreelanceHuntList';

const skills: ISkill[] = [
	{
		label: 'HTML',
		id: 'html',
	},
	{
		label: 'CSS',
		id: 'css',
	},
	{
		label: 'JavaScript',
		id: 'js',
	},
	{
		label: 'PHP',
		id: 'php',
	},
	{
		label: 'Laravel',
		id: 'laravel',
	},
	{
		label: 'WordPress',
		id: 'wordpress',
	},
	{
		label: 'React',
		id: 'react',
	},
	{
		label: 'Redux',
		id: 'redux',
	},
	{
		label: 'TypeScript',
		id: 'typescript',
	},
	{
		label: 'Node.js',
		id: 'nodejs',
	},
];

function App() {
	const { t } = useTranslation();

	return (
		<>
			<section className='hero'>
				<div className='container'>
					<h1 className='hero_title text-write'>{t('PORTFOLIO')}</h1>
					<h2 className='hero_title'>{t('Kostiantyn P.')}</h2>
					<h2 className='hero_title'>{t('Frontend Developer')}</h2>
					<div
						style={{
							display: 'flex',
							gap: '10px',
							textAlign: 'center',
							justifyContent: 'center',
						}}
					>
						<Link to={'/projects'}>
							<button
								className='btn btn-arrow'
								style={{
									marginTop: '20px',
									padding: '15px 45px 15px 15px',
								}}
							>
								{t('Go to projects')}
							</button>
						</Link>

						<Link to={'/about'}>
							<button
								className='btn btn-light'
								style={{
									marginTop: '20px',
									padding: '15px 25px 15px 15px',
								}}
							>
								{t('About')}
							</button>
						</Link>
					</div>

					<motion.hr
						initial='hidden'
						animate='visible'
						variants={variants}
						transition={{ duration: 1 }}
						style={{ margin: '20px auto' }}
					/>

					<motion.p
						initial='hidden'
						animate='visible'
						variants={variants}
						transition={{ duration: 1 }}
					>
						{skills.map((skill, index) => {
							return (
								<motion.span
									key={skill.id}
									initial='bottom'
									animate='standardY'
									variants={variants}
									transition={{ duration: 1, delay: index * 0.25 }}
								>
									{skill.label + ', '}
								</motion.span>
							);
						})}
					</motion.p>

					<Socials />
					<FreelanceHuntList />
				</div>
			</section>
		</>
	);
}

export default App;
