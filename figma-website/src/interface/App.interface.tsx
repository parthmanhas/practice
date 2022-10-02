export interface IPost {
    imageUrl?: string;
    heading?: string;
    content?: string;
    author?: IAuthor;
    authoredDate?: string;
    category?: string;
}
export interface IAuthor {
    id: string | number;
    imgUrl?: string;
    name?: string;
    description?: {
        short?: string;
        full?: string;
    }
    location?: string;
    posts: IPost[]
}

export interface ICategoryPost {
    imgUrl: string;
    category: string;
    postHeading: string;
    description: string;
}

export interface IAuthorDetails {
    author?: IAuthor;
    posts?: IPost[]
}

export interface ITestimonials {
    content: string;
    author: IAuthor;
}