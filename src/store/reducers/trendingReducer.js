export default function(state = {}, action) {
  switch (action.type) {
    case "TEST":
    //Esto no debe ir aqui, pues los reductores deben ser puros
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
