export type ProdsTypesComponent = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}


export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

export type StateProds = {
  allProds: {
    products: Product[];
  }
}