import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import PlantReducer from "./reducers";

const rootReducer = combineReducers({PlantReducer});

export const Store = createStore(rootReducer,applyMiddleware(thunk));