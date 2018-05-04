const initialState = {
  origin: '',
  destination: '',
  secCode: ''
}

const typeReducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case 'typedOrigin':
      return {
        ...state,
        origin: payload.destinationSearch
      };
    case 'typedDestination':
      return {
        ...state,
        destination: payload.destinationClicked
      }
    case 'secCode':
      return {
        ...state,
        secCode: payload.secCode
      }
    default:
      return state;
  }
}

export default typeReducer;