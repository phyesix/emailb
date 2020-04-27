import { createStore } from "redux";
import { partial } from "../reducers";

const store = createStore(
  partial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
