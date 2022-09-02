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
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Text,
} from '@chakra-ui/react';
import { deleteUserById, getUsersFromApi } from '../../actions';
export default function User({ usuarioId, user, clave, nombre, email }) {
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();

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
				<Button onClick={onOpen}>Eliminar</Button>
				<Modal
					isCentered
					onClose={onClose}
					isOpen={isOpen}
					motionPreset='slideInBottom'>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader color='red.400'>ATENCION</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text fontWeight='bold' mb='1rem'>
								Usted está a punto de eliminar al usuario
								{' ' + `${user}`}, Está seguro? esta acción es
								irreversible
							</Text>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme='blue' mr={3} onClick={onClose}>
								No. Cerrar
							</Button>
							<Button
								bg='red.400'
								onClick={() =>
									handleOnDelete(usuarioId) && onClose
								}
								variant='ghost'>
								Sí. Eliminar
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Td>
		</Tr>
	);
}
