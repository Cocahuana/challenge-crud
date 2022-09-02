import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
	useBoolean,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { deleteUserById, getUsersFromApi, updateUserById } from "../../actions";
import UpdateUser from "./UpdateUser";

export default function User({
	usuarioId,
	user,
	clave,
	nombre,
	email,
	handleOnDelete,
}) {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		usuarioId: usuarioId,
		user: "",
		clave: "",
		nombre: "",
		email: "",
	});

	function handleOnChange(event) {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	}
	function handleOnUpdate() {
		dispatch(updateUserById(input));
	}
	const {
		isOpen: isDeleteOpen,
		onOpen: onDeleteOpen,
		onClose: onDeleteClose,
	} = useDisclosure();
	const {
		isOpen: isEditOpen,
		onOpen: onEditOpen,
		onClose: onEditClose,
	} = useDisclosure();

	return (
		<Tr>
			<Td>{usuarioId}</Td>
			<Td>{user}</Td>
			<Td>{clave}</Td>
			<Td>{nombre}</Td>
			<Td>{email}</Td>
			<Td>
				<Button
					bg='cyan.300'
					mr='1'
					onClick={handleOnUpdate && onEditOpen}>
					Actualizar
				</Button>
				{
					// En proyectos reales el borrado debería ser lógico, como es un challenge, el borrado será fisico
				}

				<Button onClick={onDeleteOpen}>Eliminar</Button>
				<Modal
					isOpen={isDeleteOpen}
					onClose={onDeleteClose}
					isCentered
					motionPreset='slideInBottom'>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader color='red.400'>ATENCION</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text fontWeight='bold' mb='1rem'>
								Usted está a punto de eliminar al usuario
								{" " + `${user}`}, Está seguro? esta acción es
								irreversible
							</Text>
						</ModalBody>
						<ModalFooter>
							<Button
								colorScheme='blue'
								mr={3}
								onClick={onDeleteClose}>
								No. Cerrar
							</Button>
							<Button
								bg='red.400'
								onClick={() =>
									handleOnDelete(usuarioId) && onDeleteClose
								}
								variant='ghost'>
								Sí. Eliminar
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>

				<Modal
					isOpen={isEditOpen}
					onClose={onEditClose}
					isCentered
					motionPreset='slideInBottom'>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader color='red.400'>ATENCION</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl>
								<FormLabel>Usuario Id</FormLabel>
								<Input
									type='text'
									name='usuarioId'
									value={usuarioId}
									disabled
								/>
							</FormControl>
							<FormControl>
								<FormLabel>User</FormLabel>
								<Input
									type='text'
									name='user'
									defaultValue={user}
									onChange={handleOnChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel>Clave</FormLabel>
								<Input
									type='text'
									name='clave'
									defaultValue={clave}
									onChange={handleOnChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Nombre</FormLabel>
								<Input
									type='text'
									name='nombre'
									defaultValue={nombre}
									onChange={handleOnChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Email address</FormLabel>
								<Input
									type='text'
									name='email'
									defaultValue={email}
									onChange={handleOnChange}
								/>
							</FormControl>
						</ModalBody>
						<ModalFooter>
							<Button
								colorScheme='blue'
								mr={3}
								onClick={onEditClose}>
								No. Cerrar
							</Button>
							<Button
								bg='red.400'
								type='submit'
								onClick={() => handleOnUpdate() && onEditClose}
								variant='ghost'>
								Sí. Editar
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Td>
		</Tr>
	);
}

{
	/* <Modal
	isOpen={isEditOpen}
	onClose={onEditClose}
	isCentered
	motionPreset='slideInBottom'>
	<ModalOverlay />
	<ModalContent>
		<ModalHeader color='red.400'>ATENCION</ModalHeader>
		<ModalCloseButton />
		<ModalBody>
			<Text fontWeight='bold' mb='1rem'>
				Usted está a punto de Editar al usuario
				{' ' + `${user}`}, Está seguro? esta acción es irreversible
			</Text>
		</ModalBody>
		<ModalFooter>
			<Button colorScheme='blue' mr={3} onClick={onEditClose}>
				No. Cerrar
			</Button>
			<Button
				bg='red.400'
				onClick={() => handleOnUpdate(usuarioId) && onEditClose}
				variant='ghost'>
				Sí. Editar
			</Button>
		</ModalFooter>
	</ModalContent>
</Modal>; */
}
