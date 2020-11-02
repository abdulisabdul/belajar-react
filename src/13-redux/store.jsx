const { createStore } = require("redux");

const initialState = {
    isLogin: false,
    dataUser: {
        username: ''
    }
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLogin: !state.isLogin, dataUser: state.isLogin ? {username: ''} : action.payload }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store