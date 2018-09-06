import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from "redux"
import articleReducer from "../reducers/article";
import userReducer from "../reducers/user";
import notificationReducer from "../reducers/notification";
import { devToolsEnhancer } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import articleSaga from '../sagas/articleSaga';
import userSaga from '../sagas/userSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { takeEvery, all, fork } from 'redux-saga/effects';
const sagaMiddleware = createSagaMiddleware();

function* rootSaga (){
	yield [
		fork(articleSaga),
		fork(userSaga),
	];
}//,

const rootReducer = (state = {}, action) =>{
	return{
		articles: articleReducer(state.articles, action),
		user: userReducer(state.user, action),
		notifications: notificationReducer(state.notifications, action)
	}
}
//const store = createStore(rootReducer, devToolsEnhancer());
const store = createStore(rootReducer, 
	composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store; 