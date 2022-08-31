import {
  CREATE_TICKET,
  FETCH_TICKETS,
  FETCH_TICKET,
  DELETE_TICKET,
  EDIT_TICKET,
} from "./types";
// import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import tickets from "../../apis/tickets";

export const createTicket = async (data) => {
  try{
    const response = await tickets.post("/tickets", data);
    console.log(response);
  }catch(err){
    console.log(err);
  }
  // console.log(data);

  // dispatch({ type: CREATE_TICKET, payload: response.data });
};
