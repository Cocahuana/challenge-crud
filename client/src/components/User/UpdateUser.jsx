import React, { useState, useEffect } from 'react';
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
	FormErrorMessage,
	FormHelperText,
	Input,
} from '@chakra-ui/react';
import {
	updateUserById,
	getUsersFromApi,
	getUserById,
} from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from '../Form/Form';

function UpdateUser(props) {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		dispatch(getUserById(id));
		setData(userInfo);
	}, []);
	const userInfo = useSelector((state) => state.userInfo);

	return (
		<div>
			<h1>Update product</h1>
			<input type='text' defaultValue={data.usuarioId} />
			<input type='text' defaultValue={data.user} />
			<input type='text' defaultValue={data.nombre} />
			<input type='text' defaultValue={data.clave} />
			<input type='text' defaultValue={data.email} />
			<button>Update Product</button>
		</div>
	);
}

export default UpdateUser;
