import { GET_USERS_FROM_API, DELETE_USER_BY_ID, UPDATE_USER_BY_ID, GET_USER_BY_ID, CREATE_USER } from "./actions";
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

export function updateUserById ( payload ) {
    return async function () {
        try
        {
            await axios.put( `http://localhost:3001/users/${ payload.usuarioId }`, payload );
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}
export function getUserById ( id ) {
    return async function ( dispatch ) {
        try
        {
            let usersInfo = await axios.get( `http://localhost:3001/users/getUserById/${ id }` );
            return dispatch( {
                type: GET_USER_BY_ID,
                payload: usersInfo.data
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function createUser ( payload ) {
    return async function () {
        try
        {
            let usersInfo = await axios.post( `http://localhost:3001/users/createUser`, payload );
            console.log( usersInfo );
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}