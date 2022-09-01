import {
  CREATE_TICKET,
  FETCH_TICKETS,
  FETCH_TICKET,
  DELETE_TICKET,
  EDIT_TICKET,
} from "./types";
// import { useDispatch } from "react-redux";
// import { Dispatch } from "redux";

import tickets from "../../apis/tickets";

// export const createTicket = (formValue) => async (dispatch) => {
//   try {
//     const { data } = await tickets.post("/tickets", formValue);
//     console.log(data);
//     dispatch({ type: CREATE_TICKET, payload: data });
//   } catch (err) {
//     console.log(err);
//   }
//   // console.log(data);

//   // dispatch({ type: CREATE_TICKET, payload: response.data });
// };

export function createTicket(formValue) {
  // And then creates and returns the async thunk function:
  return async function createTicketThunk(dispatch) {
    // ✅ Now we can use the text value and send it to the server
    // const initialTodo = { text }
    const {data} = await tickets.post("/tickets", formValue)
    dispatch({ type: CREATE_TICKET, payload: data })
  }
}