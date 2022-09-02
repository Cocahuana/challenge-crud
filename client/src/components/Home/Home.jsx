import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { deleteUserById, getUsersFromApi, updateUserById } from "../../actions";
import User from "../User/User";
import UserCreate from "../User/create/UserCreate";

function Home() {
	const usersInfo = useSelector((state) => state.usersInfo);
	const dispatch = useDispatch();

	useEffect(() => {
		//Es lo mismo que hacer un mapStateToProps
		dispatch(getUsersFromApi());
	}, [dispatch]);

	function handleOnDelete(id) {
		dispatch(deleteUserById(id)).then(dispatch(getUsersFromApi()));
	}

	return (
		<Grid
			templateAreas={`
                "header"
                "main"
                "footer"
            `}
			gridTemplateRows={"10vh 1fr 5vh"}
			gridTemplateColumns={"100%"}
			h='100vh'
			gap='1'
			color='blackAlpha.700'
			fontWeight='bold'>
			<GridItem bg='orange.300' area={"header"}>
				Header
			</GridItem>
			<GridItem bg='whiteAlpha.400' area={"main"}>
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
								{usersInfo?.map((e) => (
									<User
										key={e.usuarioId}
										usuarioId={e.usuarioId}
										user={e.user}
										clave={e.clave}
										nombre={e.nombre}
										email={e.email}
										handleOnDelete={handleOnDelete}></User>
								))}
								<Td>
									<UserCreate />
								</Td>
							</Tbody>
						</Table>
					</TableContainer>
				) : (
					<h3>Loading...</h3>
				)}
			</GridItem>
			<GridItem bg='blue.300' area={"footer"}>
				Footer
			</GridItem>
		</Grid>
	);
}

export default Home;
