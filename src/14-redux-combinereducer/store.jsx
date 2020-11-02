const { createStore, combineReducers } = require("redux");

const initialStateLogin = {
    isLogin: false,
}

const initialStateUser = {
    dataUser: {
        username: ''
    }
}

function reducerLogin(state = initialStateLogin, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLogin: !state.isLogin }
        default:
            return state
    }
}

function reducerDataUser(state = initialStateUser, action) {
    switch (action.type) {
        case 'GET_DATA_USER':
            return { dataUser: action.payload }
        default: return state
    }
}

const reducer = combineReducers({
    login: reducerLogin,
    dataUser: reducerDataUser
})

const store = createStore(reducer)

export default store