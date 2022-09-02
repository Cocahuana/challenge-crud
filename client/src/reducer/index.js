import { GET_USERS_FROM_API, GET_USER_BY_ID, UPDATE_USER_BY_ID } from "../actions/actions";
const initialState = {
    usersInfo: [],
    userInfo: [],
}


function rootReducer ( state = initialState, action ) {
    switch ( action.type )
    {
        case GET_USERS_FROM_API:
            return {
                ...state,
                usersInfo: action.payload,
            }
        case GET_USER_BY_ID:
            return {
                ...state,
                userInfo: action.payload,
            }
        case UPDATE_USER_BY_ID:
            return {
                ...state,
                usersInfo: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;