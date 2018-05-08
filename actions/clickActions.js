function handleClickedOrigin(data) {
  return {
    type: 'clickedOrigin',
    payload: {
      originClicked: data
    }
  }
}

function handleClickedDestination(data) {
  return {
    type: 'clickedDestination',
    payload: {
      destinationClicked: data
    }
  }
}

function handleTicketType(data) {
  return {
    type: 'ticketType',
    payload: {
      ticketType: data
    }
  }
}

function handleTicket(data) {
  let id = data.split(", ")

  return {
    type: 'ticket',
    payload: {
      ticket: id[0],
      cost: id[1]
    }
  }
}

export default {
  handleClickedOrigin,
  handleClickedDestination,
  handleTicketType,
  handleTicket
};
