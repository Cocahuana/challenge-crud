const { Router } = require( 'express' );
const users = require( './users' )
const router = Router();

/* GET home page. */
router.use( '/users', users );


module.exports = router;
