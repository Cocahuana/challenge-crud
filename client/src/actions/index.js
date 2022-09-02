import { GET_USERS_FROM_API, DELETE_USER_BY_ID } from "./actions";
import axios from 'axios';
// const endpoint = "http://yamana.somee.com/api/usuarios";

export function getUsersFromApi () {
    return async function ( dispatch ) {
        try
        {
            let usersInfo = await axios.get( 'http://localhost:3001/users' );
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


export function deleteUserById ( id ) {
    return async function ( dispatch ) {
        try
        {
            console.log( "ID: " + id )
            let usersInfo = await axios.delete( `http://localhost:3001/users/${ id }` );
            return dispatch( {
                type: DELETE_USER_BY_ID,
                
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
} 