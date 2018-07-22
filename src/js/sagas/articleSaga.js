import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { LOAD_ARTICLES_REQUESTED, LOADING_ARTICLES_SUCCEEDED, LOADING_ARTICLES_FAILED } from '../constants/article'
import * as articleService from '../services/articleService'

function doSomething(data){
	console.log("doSomething:"+data.data[0].id);
}

function* loadArticles(action){
	try{
		console.log("fetchArticles from redux-saga!");
		const result = yield call(articleService.getArticles);
		yield doSomething(result);
		yield put({type: LOADING_ARTICLES_SUCCEEDED, payload: result.data});
	}
	catch(e){
		console.error("Error "+ e + " in fetchArticles saga! ");
		yield put({type: LOADING_ARTICLES_FAILED, payload: e.message});
	}
}

function* articleSaga(){
 yield takeLatest(LOAD_ARTICLES_REQUESTED, loadArticles);
}

export default articleSaga;