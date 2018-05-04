const initialState = {
  clickedOrigin: 'Broadway',
  clickedDestination: 'Penn Station',
  ticketType: 'One Way',
  ticket: 'Peak',
  cost: '$10.25'
}

const clickReducer = ( state = initialState, { type, payload } ) => {
    switch ( type ) {
      case 'clickedOrigin':
        return {
          ...state,
          clickedOrigin: payload.originClicked
        };
      case 'clickedDestination':
        return {
          ...state,
          clickedDestination: payload.destinationClicked
        };
      case 'ticketType':
        return {
          ...state,
          ticketType: payload.ticketType
        }
      case 'ticket':
        return {
          ...state,
          ticket: payload.ticket,
          cost: payload.cost
        };
      default:
        return state;
    }
}

export default clickReducer;