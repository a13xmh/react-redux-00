export default function(state = {}, action) {
  switch (action.type) {
    case "TEST":
    console.log("TEST");
      return {
        ...state,
        TEST: {
          payload: action.payload
        }
      };
    default:
      return state;
  }
}
