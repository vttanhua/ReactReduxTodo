import { ADD_ARTICLE, SELECT_ARTICLE, DELETE_ARTICLE } from "../constants/article";

export const addArticle = article => ({type: ADD_ARTICLE, payload: article});
export const selectArticle = selectedId =>({type: SELECT_ARTICLE, payload: selectedId});
export const deleteArticle = selectedId =>({type: DELETE_ARTICLE, payload: selectedId});