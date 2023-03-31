import React, { useState, useEffect } from "react";
import "./App.css";
import { getDatafromApi } from "./utils/helpers";
import TodoContainer from "./Components/todoContainer/TodoContainer";
import Form from "./Components/form/Form";
function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getDatafromApi().then((misTodo) => setTodos(misTodo));
	}, []);


	console.log("estos son los todos que recibo en app", todos);
	return (
		<div className="TodoApp">
			<TodoContainer todos={todos} />
		</div>
	);
}

export default App;
