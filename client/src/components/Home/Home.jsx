import React from 'react';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Grid,
	GridItem,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
} from '@chakra-ui/react';
import { getUsersFromApi } from '../../actions';

function Home() {
	const usersInfo = useSelector((state) => state.usersInfo);
	const dispatch = useDispatch();
	useEffect(() => {
		//Es lo mismo que hacer un mapStateToProps
		dispatch(getUsersFromApi());
	}, [dispatch]);

	return (
		<Grid
			templateAreas={`
                "header"
                "main"
                "footer"
            `}
			gridTemplateRows={'10vh 1fr 5vh'}
			gridTemplateColumns={'100%'}
			h='100vh'
			gap='1'
			color='blackAlpha.700'
			fontWeight='bold'>
			<GridItem bg='orange.300' area={'header'}>
				Header
			</GridItem>
			<GridItem bg='whiteAlpha.400' area={'main'}>
				{usersInfo ? (
					<TableContainer>
						<Table variant='striped' colorScheme='orange'>
							<TableCaption>CRUD challenge</TableCaption>
							<Thead>
								<Th>usuarioId</Th>
								<Th>user</Th>
								<Th>clave</Th>
								<Th>nombre</Th>
								<Th>email</Th>
								<Th>Actions</Th>
							</Thead>
							<Tbody>
								{usersInfo.map((e) => (
									<Tr>
										<Td>{e.usuarioId}</Td>
										<Td>{e.user}</Td>
										<Td>{e.clave}</Td>
										<Td>{e.nombre}</Td>
										<Td>{e.email}</Td>
										<Td>
											<Button bg='cyan.300' mr='1'>
												Update
											</Button>
											{
											// En proyectos reales el borrado debería ser lógico, como es un challenge, el borrado será fisico
											}
											<Button bg='red.400'>Delete</Button>
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				) : (
					<h3>Loading...</h3>
				)}
			</GridItem>
			<GridItem bg='blue.300' area={'footer'}>
				Footer
			</GridItem>
		</Grid>
	);
}

export default Home;
