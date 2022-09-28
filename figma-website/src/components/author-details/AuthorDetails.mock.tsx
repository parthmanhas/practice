import { AuthorDetail } from "./AuthorDetails.interface";

export const authorDetailsMock: AuthorDetail = {
  author: {
    imgUrl: "",
    name: "Hey there, I’m Andrew Jonhson and welcome to my Blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
  },
  posts: [
    {
        imgUrl: '',
        heading: 'Font sizes in UI design: The complete guide to follow',
        category: 'BUSINESS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        imgUrl: '',
        heading: 'Font sizes in UI design: The complete guide to follow',
        category: 'BUSINESS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ],
};
