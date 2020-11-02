import ReduxThunk from 'redux-thunk'
const { createStore, combineReducers, applyMiddleware } = require("redux");

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

function reducerListUsers(state = { loading: false, error: '', data: [] }, action) {
    switch (action.type) {
        case 'LOADING':
            return {...state,loading: true, error: ''}
        case 'GET_USERS':
            console.log('get users');
            return { ...state,loading: false, data: [action.payload] }
        case 'ERROR':
            return {loading: false, data: [], error: action.payload}
        default:
            return state
    }
}

const reducer = combineReducers({
    login: reducerLogin,
    dataUser: reducerDataUser,
    listUsers: reducerListUsers
})

const store = createStore(reducer,applyMiddleware(ReduxThunk))

export default store