import { ADD_ARTICLE, ADD_ARTICLE_SUCCEEDED, ADD_ARTICLE_FAILED,
		SELECT_ARTICLE, DELETE_ARTICLE, 
		LOAD_ARTICLES_REQUESTED, LOADING_ARTICLES_FAILED, LOADING_ARTICLES_SUCCEEDED } from "../constants/article";

export const addArticle = article => ({type: ADD_ARTICLE, payload: article});
export const addArticleSucceeded = article => ({type: ADD_ARTICLE_SUCCEEDED, payload: article});
export const addArticleFailed = article => ({type: ADD_ARTICLE_FAILED, payload: errorMessage});

export const selectArticle = selectedId =>({type: SELECT_ARTICLE, payload: selectedId});

export const deleteArticle = selectedId =>({type: DELETE_ARTICLE, payload: selectedId});

export const loadArticles = () => ({type: LOAD_ARTICLES_REQUESTED, payload: undefined});
export const loadingArticlesSucceeded = data => ({type: LOADING_ARTICLES_SUCCEEDED, payload: data});
export const loadingArticlesFailed = errorMessage => ({type: LOADING_ARTICLES_FAILED, payload: errorMessage});


