const express = require( 'express' );
const router = express();
const {
  getUsersFromApi
} = require( '../controllers/getUsersInfo' );

/* GET users listing. */
router.get( '/', async ( req, res, next ) => {
  try
  {
    const result = await getUsersFromApi();
    res.status( 200 ).send( result );

  }
  catch ( err )
  {
    res.status( 400 ).json( err.message );
  }
} );

module.exports = router;
