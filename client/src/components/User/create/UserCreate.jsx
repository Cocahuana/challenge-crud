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
import { getUsersFromApi, createUser } from "../../../actions";

export default function UserCreate() {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
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
	function handleSubmit() {
		dispatch(createUser(input))
			.then(dispatch(getUsersFromApi()))
			.then(onEditClose());
		setInput({
			user: "",
			clave: "",
			nombre: "",
			email: "",
		});
	}
	const {
		isOpen: isEditOpen,
		onOpen: onEditOpen,
		onClose: onEditClose,
	} = useDisclosure();

	return (
		<>
			<Button bg='cyan.300' mr='1' onClick={onEditOpen}>
				Crear
			</Button>
			<Modal
				isOpen={isEditOpen}
				onClose={onEditClose}
				isCentered
				motionPreset='slideInBottom'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader color='blackAlpha.900'>
						Crear Usuario
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>User</FormLabel>
							<Input
								type='text'
								name='user'
								value={input.user}
								onChange={handleOnChange}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Clave</FormLabel>
							<Input
								type='text'
								name='clave'
								value={input.clave}
								onChange={handleOnChange}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Nombre</FormLabel>
							<Input
								type='text'
								name='nombre'
								value={input.nombre}
								onChange={handleOnChange}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Email address</FormLabel>
							<Input
								type='text'
								name='email'
								value={input.email}
								onChange={handleOnChange}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button
							bg='whiteAlpha.200'
							color='blue.500'
							mr={3}
							onClick={onEditClose}>
							No. Cancelar
						</Button>
						<Button
							bg='blue.500'
							color='whiteAlpha.900'
							type='submit'
							onClick={() => handleSubmit() && onEditClose}
							variant='ghost'>
							Sí. Crear
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
