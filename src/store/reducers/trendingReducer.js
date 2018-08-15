import {
  TEST,
  ACTION_TRENDING_GET_DATA_RESPONSE
} from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        TEST: {
          payload: action.payload
        }
      };
    case ACTION_TRENDING_GET_DATA_RESPONSE:
      return {
        ...state,
        [ACTION_TRENDING_GET_DATA_RESPONSE]: {
          payload: action.payload,
          status: "done"
        }
      };
    default:
      return state;
  }
}
