import React from "react";
import "./TodoContainer.css";
import Todo from "../todo/Todo";
const TodoContainer = ({ todos }) => {
	return (
		<div className="todoContainer">
			{todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
		</div>
	);
};

export default TodoContainer;
