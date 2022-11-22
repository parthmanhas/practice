import { IProductItem } from "./components/product/ProductItem";

export const productItems: IProductItem[] = [
    {
      id: '1',
      name: "Grande",
      description: "Blossom Pouch",
      price: "39.49",
      quantity: 1
    },
    {
      id: '2',
      name: "Coach",
      description: "Leather Bag",
      price: "54.69",
      quantity: 1
    },
    {
      id: '3',
      name: "Remus",
      description: "Brown Strap Bag",
      price: "57.00",
      quantity: 1
    },
    {
      id: '4',
      name: "Boujee",
      description: "Black Bag",
      price: "56.49",
      quantity: 1
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