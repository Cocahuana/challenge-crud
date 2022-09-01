const axios = require( 'axios' );
const endpoint = "http://yamana.somee.com/api/usuarios";

const getUsersFromApi = async () => {
    const apiInfo = await axios.get( endpoint );
    return apiInfo.data;
}

module.exports = { getUsersFromApi }