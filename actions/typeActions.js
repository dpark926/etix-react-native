function handleTypedOrigin(data) {
  return {
    type: 'typedOrigin',
    payload: {
      typedOrigin: data
    }
  }
}

function handleTypedDestination(data) {
  console.log('hey')
  return {
    type: 'typedDestination',
    payload: {
      typedDestination: data
    }
  }
}

function handleSecCode(data) {
  return {
    type: 'secCode',
    payload: {
      secCode: data
    }
  }
}

export default {
  handleTypedOrigin,
  handleTypedDestination,
  handleSecCode
};
