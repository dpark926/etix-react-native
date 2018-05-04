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
        origin: payload.typedOrigin
      };
    case 'typedDestination':
      return {
        ...state,
        destination: payload.typedDestination
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