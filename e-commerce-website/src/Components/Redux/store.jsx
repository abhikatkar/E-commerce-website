

import {createStore, combineReducers} from "redux";
import { authReducer } from "./Auth/reducer";
import { bag_dataReducer } from "./Bag_Data/reducer";

import { dataReducer } from "./Data/reducer";


const rootReducer = combineReducers({
    data: dataReducer,
    bag_data: bag_dataReducer,
    value:authReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
)