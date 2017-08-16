import { FETCH_WEATCHER } from '../actions'; 

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATCHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}