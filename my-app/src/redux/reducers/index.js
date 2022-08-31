import { combineReducers } from "redux";
import ticketReducer from "./ticketReducer";

const reducers = combineReducers({
  tickets: ticketReducer,
});

export default reducers;
