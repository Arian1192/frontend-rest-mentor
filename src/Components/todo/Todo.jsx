import React from "react";
import "./Todo.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Todo = ({ todo }) => {
	const { register, handleSubmit, reset } = useForm();
	const [isEditing, setIsEditing] = useState(false);
	console.log(isEditing);
	const handleEdit = () => {
		fetch(`http://localhost:3000/getTodos/${todo.id}`)
			.then((res) => res.json())
			.then((data) => {
				reset({ text: data.text, date: data.fecha, done: data.done });
			});
		setIsEditing(!isEditing);
	};
	return (
		<div>
			{!isEditing && (
				<div className="container">
					<h1>{todo.text}</h1>
					<p>{todo.fecha}</p>
					{todo.done === true ? <p>🟢 Completado</p> : <p>🔴 No completado</p>}
					<div className="buttonContainer">
						<button className="button" onClick={handleEdit}>
							Editar
						</button>
						<button className="button">Eliminar</button>
						<button className="button">Completar</button>
					</div>
				</div>
			)}
			{isEditing && (
				<form className="container">
					<input type="text" placeholder="Editar tarea" {...register("text")} />
					<input type="date" {...register("date")} />
					<select {...register("done")}>
						<option value="true">Completado</option>
						<option value="false">No completado</option>
					</select>
					<button className="button">Guardar</button>
					<button onClick={handleEdit}>EXIT</button>
				</form>
			)}
		</div>
	);
};

export default Todo;
