import { Author } from "../../pages/about-us/Author.interface";
import { Post } from "../../pages/blog/Blog.interace";

export interface AuthorDetail {
    author: Author;
    posts : Post[];
}