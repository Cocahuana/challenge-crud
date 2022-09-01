import { GET_USERS_FROM_API } from "./actions";
import axios from 'axios';
// const endpoint = "http://yamana.somee.com/api/usuarios";

export function getUsersFromApi () {
    return async function ( dispatch ) {
        try
        {
            let usersInfo = await axios.get( 'http://localhost:3001/getUsers' );
            return dispatch( {
                type: GET_USERS_FROM_API,
                payload: usersInfo.data
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
} 