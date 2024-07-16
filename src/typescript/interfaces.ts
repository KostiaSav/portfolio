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

export interface IItemProject {
    item: IProjectItem
}

export interface IProjectItem {
  title: Title,
  content: Content,
  date?: string,
  image?: string,
  url?: string,
  type?: ProjectType,
}

  
  interface Title {
    rendered: string;
  }
  
  interface Content {
    rendered: string;
    protected?: boolean;
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