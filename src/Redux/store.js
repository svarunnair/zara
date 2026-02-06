import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { dataReducer } from "./Data/reducer";
import { authReducer } from "./Auth/authReducer";



const root=combineReducers({
    auth:authReducer,
    data:dataReducer
})

export const store=legacy_createStore(root,applyMiddleware(thunk))