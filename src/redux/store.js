import { createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import todoListReducer from "./todolist/todolistReducers";

const store = createStore(todoListReducer,applyMiddleware(logger))

export default store