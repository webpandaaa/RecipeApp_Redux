import {toast} from "react-toastify";
import { addrecipe } from "../reducers/recipeSlice";

export const asyncgetrecipes = () => async (dispatch , getState) =>{
    try{
        let data = JSON.parse(localStorage.getItem("recipes")) || [];
        dispatch(addrecipe(data));
    }catch(e){
        toast.error(e);
    }
};
