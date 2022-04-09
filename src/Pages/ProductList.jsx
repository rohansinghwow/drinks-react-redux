import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { fetchCocktails } from "../Redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";


export default function ProductList() {
  const [improvedCocktailsList, setImprovedCocktailsList] = useState([]);
  const { loading, cocktails, cocktail, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item, index) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strAlcoholic,
          strInstructions,
          strDrinkThumb,
        } = item;

        return {
          key: index,
          productId : idDrink,
          img: strDrinkThumb,
          drinkName: strDrink,
          category: strCategory,
          alcoholic: strAlcoholic,
          details: strInstructions,
        };
      });

      setImprovedCocktailsList(newCocktails);
    } else {
      setImprovedCocktailsList([]);
    }
  }, [cocktails]);

  function renderList(){
    if(!loading){
      return (
        <div className="container-card flex justify-between rounded-lg flex-wrap">
        {improvedCocktailsList.map((item) => (
          <div
            key={item.key}
            className="max-w-sm rounded  w-72 mt-6 shadow-lg flex flex-col justify-between mx-auto"
          >
            <img className="w-full" src={item.img} alt={item.drinkName}  />
            <div className="px-3 py-2">
              <div className="font-bold text-xl mb-2">{item.drinkName}</div>
              <p className="text-gray-700 text-ellipsis">{item.details.substring(0,200)}...</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 py-2 px-4 rounded text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{item.category}
              </span>
              <Link to={`/product/${item.productId}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      )
      
    }
    else{
      return <Spinner/>
    }
  }
  return (
    
      renderList()
      
    
  );
}
