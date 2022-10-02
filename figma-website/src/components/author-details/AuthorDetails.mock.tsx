import { IAuthor } from "../../interface/App.interface";

export const authorDetailsMock: IAuthor = {
  id: 1,
  imgUrl: "",
  name: "Hey there, I’m Andrew Jonhson and welcome to my Blog",
  description: {
    full: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
  },
  posts: [
    {
      id: 1,
      imageUrl: "",
      heading: "Font sizes in UI design: The complete guide to follow",
      category: "BUSINESS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      imageUrl: "",
      heading: "Font sizes in UI design: The complete guide to follow",
      category: "BUSINESS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};
