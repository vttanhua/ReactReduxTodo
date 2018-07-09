import {createStore} from "redux"
import articleReducer from "../reducers/article";
import userReducer from "../reducers/user";
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = (state = {}, action) =>{
	return{
		articles: articleReducer(state.articles, action),
		user: userReducer(state.user, action)
	}
}
const store = createStore(rootReducer, devToolsEnhancer());
//const store = createStore(articleReducer, devToolsEnhancer());

export default store; 