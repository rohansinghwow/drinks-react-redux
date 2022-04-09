import { configureStore } from "@reduxjs/toolkit";
import cockTailSlice from "./Redux/features/cocktailSlice";

export default configureStore({
    reducer:{
        app: cockTailSlice
    }
}
    
)