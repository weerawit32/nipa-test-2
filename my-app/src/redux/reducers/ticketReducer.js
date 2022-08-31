import {
    CREATE_TICKET,
    FETCH_TICKETS,
    FETCH_TICKET,
    DELETE_TICKET,
    EDIT_TICKET,
  } from "../actions/types";

const ticketReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_TICKET:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
  };

  export default ticketReducer;