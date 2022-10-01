import { IAuthorDetails } from "../../interface/App.interface";

export const authorDetailsMock: IAuthorDetails = {
  author: {
    imgUrl: "",
    name: "Hey there, I’m Andrew Jonhson and welcome to my Blog",
    description: {
      full: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    }
      
  },
  posts: [
    {
        imageUrl: '',
        heading: 'Font sizes in UI design: The complete guide to follow',
        category: 'BUSINESS',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        imageUrl: '',
        heading: 'Font sizes in UI design: The complete guide to follow',
        category: 'BUSINESS',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ],
};
