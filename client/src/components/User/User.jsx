import React from 'react';
import { useDispatch } from 'react-redux';

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
import { deleteUserById, getUsersFromApi } from '../../actions';
export default function User({ usuarioId, user, clave, nombre, email }) {
	const dispatch = useDispatch();
	function handleOnDelete(id) {
		dispatch(deleteUserById(id));
		dispatch(getUsersFromApi());
	}

	return (
		<Tr>
			<Td>{usuarioId}</Td>
			<Td>{user}</Td>
			<Td>{clave}</Td>
			<Td>{nombre}</Td>
			<Td>{email}</Td>
			<Td>
				<Button bg='cyan.300' mr='1'>
					Update
				</Button>
				{
					// En proyectos reales el borrado debería ser lógico, como es un challenge, el borrado será fisico
				}
				<Button bg='red.400' onClick={() => handleOnDelete(usuarioId)}>
					Delete
				</Button>
			</Td>
		</Tr>
	);
}
