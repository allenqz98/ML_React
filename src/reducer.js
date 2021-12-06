const initialState = {
  open: false,
  result: 'Test'
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'toggleModal':
      return {
        ...state,
        open: !state.open 
      }
    case 'updateResult':
      console.log(action)
      return {
        ...state,
        result: action.payload.result
      }
    default:

      return state
  }
}