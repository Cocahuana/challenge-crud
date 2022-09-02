const express = require( 'express' );
const router = express();
const {
	getUsersFromApi,
	loadInfoFromApiToDb,
	getUsersFromDb
} = require( '../controllers/getUsersInfo' );

const { User } = require( "../db" );


router.get( '/', async ( req, res, next ) => {
	try
	{
		const result = await getUsersFromDb();
		res.status( 200 ).send( result );
	}
	catch ( err ) { res.status( 400 ).json( err.message ); }

} );

router.get( '/loadUsers', async ( req, res, next ) => {
	try
	{

		await loadInfoFromApiToDb();
		const allUsers = await User.findAll();
		res.status( 200 ).send( allUsers );

	}
	catch ( err )
	{
		res.status( 400 ).json( err.message );
	}
} );

router.get( '/getUserById/:id', async ( req, res, next ) => {
	const { id } = req.params;
	try
	{
		let integerId = parseInt( id );
		const findedUser = await User.findOne( {
			where: { usuarioId: integerId },
		} );

		if ( findedUser )
		{
			res.status( 200 ).send( findedUser );
		}
		else
		{
			res.status( 400 ).send( "Usuario no encontrado" );
		}

	}
	catch ( err )
	{
		res.status( 400 ).json( err.message );
	}
} );

router.delete( '/:id', async ( req, res, next ) => {
	const { id } = req.params;
	try
	{
		let integerId = parseInt( id );
		const row = await User.findOne( {
			where: { usuarioId: integerId },
		} );

		if ( row )
		{
			await row.destroy(); // Borra la fila entera
		}

		res.status( 200 ).send( "Usuario borrado exitosamente" )

	}
	catch ( err )
	{
		res.status( 400 ).json( err.message );
	}
} );

router.post( '/createUser', async ( req, res, next ) => {
	try
	{
		let { user, clave, nombre, email } = req.body;

		let newUser = await User.create( {
			user,
			clave,
			nombre,
			email,
		} );
		res.status( 200 ).send( newUser );
	}
	catch ( err )
	{
		res.status( 400 ).json( err.message );
	}
} );

router.put( '/:id', async ( req, res, next ) => {
	let { user, clave, nombre, email } = req.body;
	const { id } = req.params;
	try
	{
		let integerId = parseInt( id );

		let findedUser = await User.findOne( {
			where: {
				usuarioId: integerId,
			},
		} );
		if ( findedUser )
		{
			const updatedUser =
				await findedUser.update( {
					user: user,
					clave: clave,
					nombre: nombre,
					email: email,
				} );
			res.status( 200 ).send( updatedUser );
		}
		else
		{
			res.status( 400 ).send( 'No user was found with that id' );
		}
	}
	catch ( err )
	{
		res.status( 400 ).json( err.message );
	}
} );

module.exports = router;
