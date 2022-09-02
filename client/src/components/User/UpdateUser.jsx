import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import {
	updateUserById,
	getUsersFromApi,
	getUserById,
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "../Form/Form";

function UpdateUser() {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.userInfo);

	const [data, setData] = useState({
		usuarioId: "",
		user: "",
	});
	const { id } = useParams();
	useEffect(() => {
		dispatch(getUserById(id));
	}, [dispatch]);

	function handleOnChange(e) {
		e.preventDefault();
		let { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const dataId = data.usuarioId;
		console.log(data);
		// dispatch(updateUserById({ dataId, data }));
	}
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h1>Update product</h1>
				<label>id:</label>
				<input
					type='text'
					value={data.usuarioId}
					name='id'
					onChange={(e) => handleOnChange(e)}
				/>
				<label>usuario:</label>
				<input
					type='text'
					value={data.user}
					name='usuario'
					onChange={(e) => handleOnChange(e)}
				/>

				{/* <input type='text' defaultValue={data.nombre} />
				<input type='text' defaultValue={data.clave} />
				<input type='text' defaultValue={data.email} /> */}
				<button type='submit' onClick={(e) => handleSubmit(e)}>
					Update Product
				</button>
			</form>
		</div>
	);
}

export default UpdateUser;
