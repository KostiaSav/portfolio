export type SocialsSizeTypes = 'big' | 'standard' | 'small';

export const projectTypes = [
	'All projects',
	'Landing Page',
	'Business card website',
	'Webflow',
	'Online stores',
] as const;

export type IProjectType = (typeof projectTypes)[number];

export const skillsTypes = [
	'HTML',
	'CSS',
	'SCSS',
	'JAVASCRIPT',
	'PHP',
	'REACT',
	'WORDPRESS',
	'GULP',
	'WEBPACK',
	'PDF',
	'SWIPER.JS',
	'VITE',
] as const;

export type TSkill = (typeof skillsTypes)[number];

export type TSizeReview = 'standard' | 'small';
