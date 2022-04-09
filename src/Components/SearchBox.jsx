import React , {useRef} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchSearchCocktail } from '../Redux/features/cocktailSlice'

export default function SearchBox(){
    const searchInput = useRef()
    const dispatch = useDispatch()
    function handleCocktailSearch(){
        const searchTerm = searchInput.current.value
        
        dispatch(fetchSearchCocktail(searchTerm))
    }

    return (
        <div className='text-center'>
        <label for="cocktail" className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">Search a Cocktail</label>
        <input type="text" onChange={handleCocktailSearch} id="cocktail" ref={searchInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Blue Margarita" />
        
        </div>
    )
}