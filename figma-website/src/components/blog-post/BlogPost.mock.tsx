import { BlogPost, BlogPostAuthor, BlogPostRecommendation } from "./BlogPost.interface";

export const blogRecommendationsMock: BlogPostRecommendation[] = [
    {
        imgUrl: '',
        authorName: 'John Doe 1',
        date: 'Aug 23, 2021',
        postHeading: 'A UX Case Study Creating a Studious Environment for Students: ',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ',
    },
    {
        imgUrl: '',
        authorName: 'John Doe 2',
        date: 'Aug 23, 2021',
        postHeading: 'A UX Case Study Creating a Studious Environment for Students: ',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ',
    },
    {
        imgUrl: '',
        authorName: 'John Doe 3',
        date: 'Aug 23, 2021',
        postHeading: 'A UX Case Study Creating a Studious Environment for Students: ',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ',
    }
];

export const blogPostMock: BlogPost = {
    heading: '',
    content: '<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>'
}

export const blogPostAuthorMock: BlogPostAuthor = {
    name: 'Andrew Jonson',
    date: '27 January 2022',
    imgUrl: ''
}