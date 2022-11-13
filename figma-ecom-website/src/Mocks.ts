import { IProductItem } from "./components/product/ProductItem";

export const productItems: IProductItem[] = [
    {
      name: "Grande",
      description: "Blossom Pouch",
      price: "39.49",
    },
    {
      name: "Coach",
      description: "Leather Bag",
      price: "54.69",
    },
    {
      name: "Remus",
      description: "Brown Strap Bag",
      price: "57.00",
    },
    {
      name: "Boujee",
      description: "Black Bag",
      price: "56.49",
    },
  ];
  
  export const collections = ["Personal Care", "Handbags", "Wrist Watch", "Sun Glasses"];
  
  export const brands = ["zara", "d&g", "h&m", "chanel", "prada", "biba"];

  export const filters = [
    {
        heading: 'Color',
        options: [
            'Blue',
            'Black',
            'Red'
        ]
    },
    {
        heading: 'Size',
        options: [
            'Large',
            'Small',
            'Medium'
        ]
    },
    {
        heading: 'Brand',
        options: [
            'Gucci',
            'Prada',
            'Remus',
            'Coach'
        ]
    },
    {
        heading: 'Price Range',
        options: [
            '0 - 1000',
            '1000 - 5000',
            '5000 - 10000'
        ]
    }
  ]