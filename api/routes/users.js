const express = require( 'express' );
const router = express();

/* GET users listing. */
router.get( '/', function ( req, res, next ) {
  res.status( 200 ).send( 'Im a user' );
} );

module.exports = router;
