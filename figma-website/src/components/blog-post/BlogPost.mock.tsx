import { IAuthor, IPost } from "../../interface/App.interface";

export const blogRecommendationsMock: IPost[] = [
    {
        imageUrl: '',
        author: {
            id: 1,
            name: 'John Doe 1',
            posts: []
        },
        authoredDate: 'Aug 23, 2021',
        heading: 'A UX Case Study Creating a Studious Environment for Students: ',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ',
    },
    {
        imageUrl: '',
        author: {
            id: 2,
            name: 'John Doe 2',
            posts: []
        },
        authoredDate: 'Aug 23, 2021',
        heading: 'A UX Case Study Creating a Studious Environment for Students: ',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ',
    },
    {
        imageUrl: '',
        author: {
            id: 3,
            name: 'John Doe 3',
            posts: []
        },
        authoredDate: 'Aug 23, 2021',
        heading: 'A UX Case Study Creating a Studious Environment for Students: ',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ',
    }
];

export const blogPostMock: IPost = {
    heading: '',
    content: '<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>'
}

export const blogPostAuthorMock: IAuthor = {
    id: 1,
    name: 'Andrew Jonson',
    imgUrl: '',
    posts: []
}