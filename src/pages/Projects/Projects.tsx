import styles from './Projects.module.css';

import naxas_project from '../../assets/img/naxas.png';
import naxas_project_full from '../../assets/img/naxas_full.png';

import smm_project from '../../assets/img/smm.png';
import smm_project_full from '../../assets/img/smm_full.png';

import pharma_project from '../../assets/img/pharma.png';
import pharma_project_full from '../../assets/img/pharma_full.png';

import nexcent_project from '../../assets/img/nexcent.png';
import nexcent_project_full from '../../assets/img/nexcent_full.png';

import tech_project from '../../assets/img/tech.jpg';
import tech_project_full from '../../assets/img/tech_full.png';

import webflow_tech_project from '../../assets/img/webflow_tech.png';

import security_project from '../../assets/img/security.png';
import security_project_full from '../../assets/img/security_full.png';

import pdr_project from '../../assets/img/pdr.jpg';
import pdr_project_full from '../../assets/img/pdr_full.png';

import { useTranslation } from 'react-i18next';
import { IProjectItem } from '../../typescript/interfaces';
import ListProjects from '../../layouts/ListProjects/ListProjects';
import ChangerTypeProjects from '../../components/ChangerTypeProjects/ChangerTypeProjects';
import { useState } from 'react';
import { IProjectType } from '../../typescript/types';

export const projects: IProjectItem[] = [
	{
		title: {
			rendered: 'Landing page for an SMM service.',
		},
		content: {
			rendered:
				'Minimalist design, a beautiful and compact website for an SMM service.',
		},
		date: '07,7,2024',
		image: smm_project,
		imageFull: smm_project_full,
		cost: 2000,
		url: 'https://kostiasav.github.io/smm/',
		type: 'Landing Page',
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'GULP'],
		slug: 'smm',
		commentId: 4352,
	},
	{
		title: {
			rendered: 'Naxas Fun.',
		},
		content: {
			rendered:
				'A beautiful and minimalist design with well-structured layout for a business card website. Four pages were created.',
		},
		date: '07,7,2024',
		image: naxas_project,
		imageFull: naxas_project_full,
		cost: 2500,
		url: 'http://naxas.fun/',
		type: 'Landing Page',
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'GULP', 'PHP'],
		slug: 'naxas',
		commentId: 4351,
	},
	{
		title: {
			rendered: 'Security.',
		},
		content: {
			rendered:
				'This project is a single-page website for a company specializing in security solutions. The website provides information about services, products, and technologies.',
		},
		date: '06,30,2024',
		image: security_project,
		imageFull: security_project_full,
		url: 'https://kostiasav.github.io/security/',
		type: 'Landing Page',
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'GULP'],
		slug: 'security',
	},
	{
		title: {
			rendered: 'Correcting the layout and writing of the calculator',
		},
		content: {
			rendered:
				'In a couple of days, I wrote a calculator that calculates the price of repairs on the invoice.',
		},
		cost: 2800,
		date: '06,02,2024',
		image: pdr_project,
		imageFull: pdr_project_full,
		url: 'https://pdrpatrol.ca/',
		type: 'Business card website',
		slug: 'calculator',
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'PDF', 'SWIPER.JS'],
		commentId: 4353,
	},
	{
		title: {
			rendered: 'Pharma',
		},
		content: {
			rendered:
				'Developed a website using my Gulp assembly based on a ready-made layout in Figma.',
		},
		date: '04,18,2024',
		image: pharma_project,
		imageFull: pharma_project_full,
		cost: 4500,
		url: 'https://kostiasav.github.io/pharma/',
		type: 'Business card website',
		slug: 'pharma',
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'SWIPER.JS'],
	},
	{
		title: {
			rendered: 'Nexcent',
		},
		content: {
			rendered:
				'I created a website based on an existing design in Figma. The entire project was completed in just two days. The site is fully responsive, ensuring optimal functionality on mobile devices.',
		},
		date: '03,18,2024',
		image: nexcent_project,
		imageFull: nexcent_project_full,
		url: 'https://kostiasav.github.io/nexcent-app/',
		type: 'Landing Page',
		slug: 'nexcent',
		cost: 2000,
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'],
	},
	{
		title: {
			rendered: 'TechCues',
		},
		content: {
			rendered: 'Built using a Figma design, on React, and fully responsive.',
		},
		date: '02,18,2024',
		image: tech_project,
		imageFull: tech_project_full,
		url: 'https://kostiasav.github.io/TechCues/',
		type: 'Landing Page',
		slug: 'techcues',
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
	},
	{
		title: {
			rendered: 'Teach',
		},
		content: {
			rendered:
				"The first project on Webflow is still far from being completed. There's one more section to build on the site, animations to add, some optimization to do, and full responsiveness to implement.",
		},
		date: '06,19,2024',
		image: webflow_tech_project,
		url: 'https://teach-174511.webflow.io/',
		type: 'Webflow',
		slug: 'teach',
		skills: ['HTML', 'CSS', 'JAVASCRIPT', 'WEBFLOW'],
	},
];

const Projects = () => {
	const { t } = useTranslation();

	const [type, setType] = useState<IProjectType | undefined>('All projects');

	return (
		<>
			<section className={styles.projects_wrapper}>
				<div className='container'>
					<div className={styles.block_title}>
						<h1 className='title_block_h1'>{t('Projects')}</h1>
					</div>

					<ChangerTypeProjects currentType={type} changeType={setType} />

					<ListProjects projects={projects} type={type} />
				</div>
			</section>
		</>
	);
};

export default Projects;
