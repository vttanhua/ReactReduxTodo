import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {  	ADD_ARTICLE, ADD_ARTICLE_SUCCEEDED, ADD_ARTICLE_FAILED,
			UPDATE_ARTICLE, UPDATE_ARTICLE_SUCCEEDED, UPDATE_ARTICLE_FAILED,
			DELETE_ARTICLE, DELETE_ARTICLE_SUCCEEDED, DELETE_ARTICLE_FAILED,
		  	LOAD_ARTICLES_REQUESTED, LOADING_ARTICLES_SUCCEEDED, LOADING_ARTICLES_FAILED } from '../constants/article'
import * as articleService from '../services/articleService'


///TODO change to use action creators!
function* addArticle(action){
	try{
		console.log("Creating article from redux-saga!"+action.payload.title);
		const createArticleResult = yield call(articleService.createArticle,action.payload);
		var id = createArticleResult.getCreatedObjectId();
		action.payload.id = id;
		console.log("getCreatedObjectId "+action.payload.id);
		yield put({type:ADD_ARTICLE_SUCCEEDED, payload:action.payload});
	}catch(e){          
		console.log("add article error: "+e.message);
		yield put({type:ADD_ARTICLE_FAILED, payload:e.message});
	}
}
function* updateArticle(action){
	try{
		console.log("Updating article from redux-saga!"+action.payload.title);
		const updateArticleResult = yield call(articleService.updateArticle,action.payload);
		yield put({type:LOAD_ARTICLES_REQUESTED, undefined});
		yield put({type:UPDATE_ARTICLE_SUCCEEDED, payload:action.payload});
	}catch(e){          
		console.log("update article error: "+e.message);
		yield put({type:UPDATE_ARTICLE_FAILED, payload:e.message});
	}
}

function* deleteArticle(action){
		try{
		console.log("deleteArticle from redux-saga!");
		const result = yield call(articleService.deleteArticle, action.payload);
		yield put({type: DELETE_ARTICLE_SUCCEEDED, payload: action.payload});
	}
	catch(e){
		console.error("Error "+ e + " in deleteArticles saga! ");
		yield put({type: DELETE_ARTICLE_FAILED, payload: e.message});
	}
}

function* loadArticles(action){
	try{
		console.log("fetchArticles from redux-saga!");
		const result = yield call(articleService.getArticles);
		yield put({type: LOADING_ARTICLES_SUCCEEDED, payload: result.getData()});
	}
	catch(e){
		console.error("Error "+ e + " in fetchArticles saga! ");
		yield put({type: LOADING_ARTICLES_FAILED, payload: e.message});
	}
}

function* articleSaga(){
	yield takeLatest(LOAD_ARTICLES_REQUESTED, loadArticles);
 	yield takeEvery(ADD_ARTICLE,addArticle);
 	yield takeEvery(UPDATE_ARTICLE, updateArticle);
 	yield takeEvery(DELETE_ARTICLE,deleteArticle);
}

export default articleSaga;