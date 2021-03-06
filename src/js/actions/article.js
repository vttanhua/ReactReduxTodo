import { ADD_ARTICLE, ADD_ARTICLE_SUCCEEDED, ADD_ARTICLE_FAILED,
		UPDATE_ARTICLE, UPDATE_ARTICLE_SUCCEEDED, UPDATE_ARTICLE_FAILED,
		SELECT_ARTICLE, DELETE_ARTICLE, 
		LOAD_ARTICLES_REQUESTED, LOADING_ARTICLES_FAILED, LOADING_ARTICLES_SUCCEEDED } from "../constants/article";

export const addArticle = article => ({type: ADD_ARTICLE, payload: article});
export const addArticleSucceeded = article => ({type: ADD_ARTICLE_SUCCEEDED, payload: article});
export const addArticleFailed = errorMessage => ({type: ADD_ARTICLE_FAILED, payload: errorMessage});

export const updateArticle = article => ({type: UPDATE_ARTICLE, payload: article});
export const updateArticleSucceeded = article => ({type: UPDATE_ARTICLE_SUCCEEDED, payload: article});
export const updateArticleFailed = errorMessage => ({type: UPDATE_ARTICLE_FAILED, payload: errorMessage});

export const deleteArticle = id =>({type: DELETE_ARTICLE, payload: id});
export const deleteArticlesSucceeded = data => ({type: DELETE_ARTICLE_SUCCEEDED, payload: data});
export const deleteArticlesFailed = errorMessage => ({type: DELETE_ARTICLE_FAILED, payload: errorMessage});

export const loadArticles = () => ({type: LOAD_ARTICLES_REQUESTED, payload: undefined});
export const loadingArticlesSucceeded = data => ({type: LOADING_ARTICLES_SUCCEEDED, payload: data});
export const loadingArticlesFailed = errorMessage => ({type: LOADING_ARTICLES_FAILED, payload: errorMessage});


export const selectArticle = selectedId =>({type: SELECT_ARTICLE, payload: selectedId});


