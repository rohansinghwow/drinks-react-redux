import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import PageNotFound from "./Pages/PageNotFound";
import SingleProduct from "./Pages/SingleProduct";
import Layout from "./Components/Layout";
import SearchBox from "./Components/SearchBox";

export default () => (
  <>
  <Routes>
    <Route path='/' element={
      <Layout>
        <SearchBox/>
        <ProductList />
    </Layout>
    }></Route>

    <Route path='/product/:pid' element={<SingleProduct />}></Route>

    <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    </>
  
);
