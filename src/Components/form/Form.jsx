import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
const Form = ({todos}) => {
	const { register, handleSubmit, reset } = useForm();

	const quieroVerMisDatosParaGuardar = (data) => {
		console.log(data);
		reset();
	};
	// imaginate qu esto es lo que viene cuando nostros pulsamos en el boton de editar un todo
	const todo = {
		text: "hola",
		date: "2021-09-01",
		done: true,
	};

	const patchTodoToForm = () => {
		// aqui hago mi fetch ( del todo que quiero editar) y hago el reset con el todo que voy a modificar
		reset(todo);
	};

	return (
		<div className="FormContainer">
			<form onSubmit={handleSubmit(quieroVerMisDatosParaGuardar)}>
				<input placeholder="Escriba algo..." {...register("text")} />
				<input type="date" {...register("date")} />
				<select {...register("done")}>
					<option value="true">true</option>
					<option value="false">false</option>
				</select>
				<input type="submit" />
			</form>
			<button onClick={patchTodoToForm}>Modificar todo</button>
		</div>
	);
};

export default Form;
