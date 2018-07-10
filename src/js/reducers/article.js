import { ADD_ARTICLE, SELECT_ARTICLE, DELETE_ARTICLE }  from "../constants/article";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	articles: [],
	articlesByKey: {},
	selectedArticleId: 1
});

const articleReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_ARTICLE:{
		 	var p = Immutable({ ...state, articles: [...state.articles,action.payload],
		 					 articlesByKey: Immutable.set(state.articlesByKey,action.payload.id,state.articles.length)});
		 	return p;
		 	     // articlesByKey: Immutable.merge(state.articlesByKey, {action.payload.id: state.articles.length-1})};//TODO how to do this easier!!
		 	//newState.articlesByKey[action.payload.id] = newState.articles.length-1;
		 	//return { ...state, articles: [...state.articles,action.payload]}
			//	articlesById: {...state.articlesById, articlesById[action.payload.id]: action.payload}};
			//return { ...state, articles: [...state.articles,action.payload], 
			//	articlesById: {...state.articlesById, articlesById[action.payload.id]: action.payload}};		 	
		 }
		case SELECT_ARTICLE:{
		 	return  Immutable({ ...state, selectedArticleId: action.payload.selectedId});
		 }		
		 case DELETE_ARTICLE:{
		 	console.log("Deleting article with key: "+action.payload.selectedId);
		 	var index = state.articlesByKey[action.payload.selectedId];
		 	console.log("Article with key: "+action.payload.selectedId+" is in index: "+index);
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
			return state;	
		}
	}
}; 

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
