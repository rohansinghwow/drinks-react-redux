import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async () => {
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(res=>res.json())
    }
)

export const fetchSingleCocktail = createAsyncThunk(
    "cocktails/fetchSingleCocktail",
    async (id) => {
        console.log(`from thunk ${id}`)
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>res.json())
    }
)

export const fetchSearchCocktail = createAsyncThunk(
    "cocktails/fetchSearchCocktail",
    async (searchTerm) => {
        console.log(`from search ${searchTerm}`)
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res=>res.json())
    }
)

const cockTailSlice = createSlice({
    name : "cocktails",
    initialState : {
        loading: true,
        cocktails : [],
        cocktail : [],
        error : ''
    },
    extraReducers : {
        [fetchCocktails.pending]:(state,action)=>{
            state.loading = true;
        },
        [fetchCocktails.fulfilled]:(state,action)=>{
            state.loading = false;
            state.cocktails = action.payload.drinks;
            
        },
        [fetchCocktails.rejected]:(state,action)=>{
            state.loading = false,
            state.error = action.payload
        },
        
        [fetchSingleCocktail.pending]:(state,action)=>{
            state.loading = true;
            
        },
        [fetchSingleCocktail.fulfilled]:(state,action)=>{
            state.loading = false;
            state.cocktail = action.payload.drinks;
            
        },
        [fetchSingleCocktail.rejected]:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },

        [fetchSearchCocktail.pending]:(state,action)=>{
            state.loading = true;
            
        },
        [fetchSearchCocktail.fulfilled]:(state,action)=>{
            state.loading = false;
            state.cocktails = action.payload.drinks;
            
        },
        [fetchSearchCocktail.rejected]:(state,action)=>{
            state.loading = false,
            state.error = action.payload
        },
        
    }

    
})


export default cockTailSlice.reducer