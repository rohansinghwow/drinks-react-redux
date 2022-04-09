import React from "react";
import Layout from "../Components/Layout";
import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../Redux/features/cocktailSlice";
import Spinner from "../Components/Spinner";

export default function SingleProduct(){
    const dispatch = useDispatch()
    const {pid} = useParams()
    const {cocktail,loading} = useSelector((state)=>({
        ...state.app
    }))
    const [modifyCocktail,setmodifyCocktail] = useState([]) 
    useEffect(()=>{
        console.log(cocktail)
        dispatch(fetchSingleCocktail(pid))
    } , [dispatch , pid])

    
    function renderCocktail(){
        if(cocktail.length>0){
            const {idDrink,strDrink,strCategory,strAlcoholic,strGlass,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5 , strDrinkThumb} = cocktail[0]
            const allIngredients = [strIngredient1 ,strIngredient2,strIngredient3]
            
            return (
                
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={strDrinkThumb} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{strGlass}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{strDrink}</h1>
        
        <p className="leading-relaxed">{strInstructions}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex">
            <span className="mr-3">Ingreidents</span>
            {allIngredients.map((item)=>(
                
                    <span className="bg-gray-100 text-gray-800 text-md  mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{item}</span>

            ))}
          </div>
          
        </div>
        <div className="flex">
          
          <Link to={'/'} className="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Go Back</Link>
          
        </div>
      </div>
    </div>
  </div>
</section>

            )
            
            
        }
        else{
            return <h1>Sorry , No cocktail found</h1>
        }
        
        
    }
    useEffect(()=>{
            
    } , [cocktail, pid])
    console.log(pid)
    return (
        <Layout>
            
            {loading ? <Spinner/> : renderCocktail()}
        
        </Layout>
    )
}