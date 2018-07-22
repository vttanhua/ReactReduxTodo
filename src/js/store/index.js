import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from "redux"
import articleReducer from "../reducers/article";
import userReducer from "../reducers/user";
import { devToolsEnhancer } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import articleSaga from '../sagas/articleSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();


const rootReducer = (state = {}, action) =>{
	return{
		articles: articleReducer(state.articles, action),
		user: userReducer(state.user, action)
	}
}
//const store = createStore(rootReducer, devToolsEnhancer());
const store = createStore(rootReducer, 
	composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(articleSaga);

export default store; 