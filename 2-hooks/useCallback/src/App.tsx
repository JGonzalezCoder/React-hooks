import { useState, useCallback } from 'react';
import List from './components/List';
import Item from './components/Item';
import { Todo } from './interfaces';

const App = () => {
	const [search, setSearch] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: 1,
			task: 'Primera tarea'
		},
		{
			id: 2,
			task: 'Segunda tarea'
		}
	]);
	
	const addTodo = (): void => {
		setTodos([
		...todos,
		{
			id: 3,
			task: 'Tercera tarea'
		}
		])
	}
	const deleteItem = useCallback((id: number) => {
		const filtrado = todos.filter(item => item.id !== id);
		setTodos(filtrado);
	}, [todos]);

	return (
		<div className="App">
			<input 
				value={search}
				onChange={(e) => setSearch()}
			/>
			<br/>
			<button onClick={addTodo}>Agregar</button>
			<br/>
			<List todos={todos} deleteItem={deleteItem}/>
		</div>
	)
};

export default App;
