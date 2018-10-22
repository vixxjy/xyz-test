/**
 * created by Ajor on 21-10-2018
*/
//=============================================================================


import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from  'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;