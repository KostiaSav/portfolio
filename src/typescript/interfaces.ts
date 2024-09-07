// export interface IProjectItem {
//     id: string,
//     title: string,
//     description: string,
//     date?: Date,
//     types?: ProjectType,
//     imageSrc?: string,
//     alt?: string,
//     src?: string,
// }

import { IProjectType, SocialsSizeTypes, TSizeReview, TSkill } from './types';

export interface IItemProject {
	item: IProjectItem;
}

export interface IProjectItem {
	title: Title;
	content: Content;
	cost?: number;
	date?: string;
	image?: string;
	imageFull?: string;
	url?: string;
	type?: IProjectType;
	skills?: TSkill[];
	slug: string;
	commentId?: number;
}

interface Title {
	rendered: string;
}

interface Content {
	rendered: string;
	protected?: boolean;
}

export interface ILogotype {
	to?: string;
}

export interface ILink {
	to?: string;
	label?: string;
}

export interface IListProjects {
	projects: IProjectItem[];
	type?: IProjectType;
}

export interface ISocials {
	type?: SocialsSizeTypes;
}

export interface ISkill {
	label: string;
	id: string;
}

export interface IChangerTypeProjects {
	currentType?: IProjectType;
	changeType: any;
}

export interface IReview {
	id: number;
	title: string;
	date: Date;
	cost: number;
	name: string;
	avatar?: string;
	surname?: string;
	comment: string;
	rating: IRating;
}

export interface IRating {
	quality: number;
	professionalism: number;
	cost: number;
	responseveness: number;
	deadlines: number;
}

export interface IReviewComponent {
	review: IReview;
	size?: TSizeReview;
}

export interface ICostComponent {
	cost: number;
	currency?: string;
}

export interface IDateComponent {
	date: Date;
}

// interface Link {
//   href: string;
//   embeddable?: boolean;
//   taxonomy?: string;
//   templated?: boolean;
// }

// interface Links {
//   self: Link[];
//   collection: Link[];
//   about: Link[];
//   author: Link[];
//   "wp:featuredmedia": Link[];
//   "wp:attachment": Link[];
//   "wp:term": Link[];
//   curies: Link[];
// }

// interface IProjectItem {
//   id: number;
//   date: string;
//   date_gmt: string;
//   guid: Guid;
//   modified: string;
//   modified_gmt: string;
//   slug: string;
//   status: string;
//   type: string;
//   link: string;
//   title: Title;
//   content: Content;
//   author: number;
//   featured_media: number;
//   template: string;
//   categories: number[];
//   tags: any[];
//   _links: Links;
// }
