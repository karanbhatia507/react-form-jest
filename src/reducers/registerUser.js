export default (state = '', action) => {
    switch (action.type) {
    case 'REGISTER_USER':
        return state = action.payload
    }
    return state
  }