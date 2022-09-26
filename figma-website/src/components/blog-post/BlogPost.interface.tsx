export interface BlogPostRecommendation {
    imgUrl: string;
    authorName: string;
    postHeading: string;
    description: string;
    date: string;
}

export interface BlogPost {
    heading: string;
    content: string;
}

export interface BlogPostAuthor {
    name: string;
    date: string;
    imgUrl: string;
}