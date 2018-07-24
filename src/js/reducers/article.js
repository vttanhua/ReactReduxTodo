import { ADD_ARTICLE,ADD_ARTICLE_SUCCEEDED, ADD_ARTICLE_FAILED,
	 	SELECT_ARTICLE, 
	 	DELETE_ARTICLE, DELETE_ARTICLE_SUCCEEDED, DELETE_ARTICLE_FAILED,
	 	LOADING_ARTICLES_FAILED, LOADING_ARTICLES_SUCCEEDED }  from "../constants/article";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	articles: [],
	articlesByKey: {},
	selectedArticleId: -1,
	loadingStatus: false,
	errorMessage: ""
});

function getArticlesByKeyMap(articles){
	var articlesByKey = new Object();
	for(var i = 0; i < articles.length; i ++){
		articlesByKey[""+articles[i].id]=i;
	}
	return articlesByKey;
}

//LOADING_ARTICLES_FAILED, LOADING_ARTICLES_SUCCEEDED
/* Article reducer for client side processing begins*/
const articleReducer = (state = initialState, action) => {
	console.log("Came to article reducer with action: "+action.type);
	switch (action.type){
		case LOADING_ARTICLES_SUCCEEDED:{
			console.log("Article reducer handling event: "+LOADING_ARTICLES_SUCCEEDED);
			var loadedArticles = action.payload;
			if(loadedArticles == "")
				loadedArticles = new Array();
			var articlesByKeyNew = getArticlesByKeyMap(loadedArticles);
			return Immutable({... state, articles: loadedArticles, articlesByKey:articlesByKeyNew});
		}
		case LOADING_ARTICLES_FAILED:{
			console.log("Article reducer handling event: "+LOADING_ARTICLES_FAILED);
			return state;
		}
		case ADD_ARTICLE_SUCCEEDED:{
			console.log("Article reducer handling event: "+ADD_ARTICLE_SUCCEEDED);
		 	var p = Immutable({ ...state, articles: [...state.articles,action.payload],
		 					 articlesByKey: Immutable.set(state.articlesByKey,action.payload.id,state.articles.length)});
		 	return p;
		 }
		 case ADD_ARTICLE_FAILED:{
			console.log("Article reducer handling event: "+ADD_ARTICLE_FAILED);
		 	console.log("Creating article failed. Error message is: "+action.payload);
		 	return state;
		 }
		case SELECT_ARTICLE:{
			console.log("Article reducer handling event: "+SELECT_ARTICLE);
			console.log(action.payload)
		 	return  Immutable({ ...state, selectedArticleId: action.payload});
		 }		
		 case DELETE_ARTICLE_SUCCEEDED:{
		 	console.log("Article reducer handling event: "+DELETE_ARTICLE_SUCCEEDED);
		 	console.log("Deleting article with key: "+action.payload);
		 	var index = state.articlesByKey[action.payload];
		 	console.log("Article with key: "+action.payload+" is in index: "+index);
		 	var articlesNew = [...state.articles.slice(0,index),...state.articles.slice(index+1)];
		 	var articlesByKeyNew =  getArticlesByKeyMap(articlesNew);

		 	let selectedArticleIdNew = state.selectedArticleId;
		 	if(state.selectedArticleId == action.payload)
		 		selectedArticleIdNew = -1;
		 	return  Immutable({ ...state, articles: articlesNew, articlesByKey: articlesByKeyNew,selectedArticleId:selectedArticleIdNew});
		 }
		 case DELETE_ARTICLE_FAILED:{
		 	return state;
		 }
		default:{
			console.log("Article reducer handling event: default");
			return state;	
		}
	}
}; 
/* Article reducer for client side processing ends*/
export default articleReducer;


//selectors

export function getArticles(state){
	return state.articles.articles;
}

export function getArticlesByKey(state){
	return state.articles.articlesByKey;
}

export function getSelectedArticle(state){
 	var articleIndex = state.articles.articlesByKey[state.articles.selectedArticleId];
 	return state.articles.articles[articleIndex];
}
