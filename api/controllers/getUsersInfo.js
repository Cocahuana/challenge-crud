const axios = require( 'axios' );
const endpoint = "http://yamana.somee.com/api/usuarios";
const { User } = require( "../db" );

const getUsersFromApi = async () => {
    const apiInfo = await axios.get( endpoint );
    return apiInfo.data;
}


const loadInfoFromApiToDb = async () => {

    const apiInfo = await getUsersFromApi();
    const usersData = apiInfo.forEach( e => {

        User.findOrCreate(
            {
                where: {
                    // Si tuvieramos que permanecer los ids provenientes de la api,
                    // El codigo sería diferente y tendria que agregarse la linea de abajo
                    // usuarioId: e.usuarioId,
                    user: e.user,
                    clave: e.clave,
                    nombre: e.nombre,
                    email: e.email,
                },
            }
        );
    } );
    return usersData;
}


const getUsersFromDb = async () => {
    const users = await User.findAll();
    return users;
}

module.exports = { getUsersFromApi, loadInfoFromApiToDb, getUsersFromDb }