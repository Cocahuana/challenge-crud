import { GET_USERS_FROM_API } from "../actions/actions";
const initialState = {
    usersInfo: [],
}


function rootReducer ( state = initialState, action ) {
    switch ( action.type )
    {
        case GET_USERS_FROM_API:
            return {
                ...state,
                usersInfo: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;