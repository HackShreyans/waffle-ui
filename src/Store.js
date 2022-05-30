import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoginReducer} from './reducers/userReducer'
import {dataListReducer} from './reducers/dataReducer'


const reducer = combineReducers({
userLogin: userLoginReducer,
userData: dataListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware(...middleware))
)

export default store;