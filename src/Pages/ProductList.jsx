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
        <div className="container-card flex justify-around rounded-lg flex-wrap">
        {improvedCocktailsList.map((item) => (
          <div
            key={item.key}
            className="max-w-sm rounded overflow-hidden shadow-lg mt-6"
          >
            <img className="w-full" src={item.img} alt={item.drinkName} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.drinkName}</div>
              <p className="text-gray-700 text-base">{item.details}</p>
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
