import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";



import axios, { } from "axios";
import {setProducts } from "../redux/actions/productsActions";
import { useEffect } from "react";
import { StateProds } from "../types/types";



const ProductListing = () => {
  const products = useSelector((state: StateProds) => state.allProds.products);
  console.log(products)
  const dispatch = useDispatch();


  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="ui grid container">
      {products.map((prods) => (
        <ProductComponent
          key={prods.id}
          id={prods.id}
          title={prods.title}
          image={prods.image}
          price={prods.price}
          category={prods.category}
        />
      ))}
    </div>
  );
};

export default ProductListing;
