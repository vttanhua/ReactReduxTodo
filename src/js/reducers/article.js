import { ADD_ARTICLE,ADD_ARTICLE_SUCCEEDED, ADD_ARTICLE_FAILED,
	 	SELECT_ARTICLE, DELETE_ARTICLE,
	 	LOADING_ARTICLES_FAILED, LOADING_ARTICLES_SUCCEEDED }  from "../constants/article";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	articles: [],
	articlesByKey: {},
	selectedArticleId: 1,
	loadingStatus: false,
	errorMessage: ""
});
//LOADING_ARTICLES_FAILED, LOADING_ARTICLES_SUCCEEDED
/* Article reducer for client side processing begins*/
const articleReducer = (state = initialState, action) => {
	console.log("Came to article reducer with action: "+action.type);
	switch (action.type){
		case LOADING_ARTICLES_SUCCEEDED:{
			console.log("Article reducer handling event: "+LOADING_ARTICLES_SUCCEEDED);
			var articlesByKey = new Object();
			for(var i = 0; i < action.payload.length; i ++){
				articlesByKey[""+action.payload[i].id]=i;
			}
			return Immutable({... state, articles: action.payload, articlesByKey:articlesByKey});
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
		 case DELETE_ARTICLE:{
		 	console.log("Article reducer handling event: "+DELETE_ARTICLE);
		 	console.log("Deleting article with key: "+action.payload);
		 	var index = state.articlesByKey[action.payload];
		 	console.log("Article with key: "+action.payload+" is in index: "+index);
		 	var articlesNew = [...state.articles.slice(0,index),...state.articles.slice(index+1)];
		 	var articlesByKeyNew = _.omit(state.articlesByKey, action.payload.selectedId.foreach(function(element) {
			  console.log(element);
			  return element-1;
			})
			);

		 	let selectedArticleIdNew = state.selectedArticleId;
		 	if(state.selectedArticleId == action.payload.selectedId)
		 		selectedArticleIdNew = -1;
		 	return  Immutable({ ...state, articles: articlesNew, articlesByKeyNew: articlesByKey,selectedArticleId:selectedArticleIdNew});
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
