import { createStore } from "redux";
import rootReducer from "../reducers/RootReducer.js";

const store = createStore(rootReducer);
export default store;