import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 not found!</Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
