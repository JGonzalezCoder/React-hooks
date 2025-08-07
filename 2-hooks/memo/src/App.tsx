import { useState } from 'react';
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

	return (
		<div className="App">
			<input 
				value={search}
				onChange={(e) => setSearch()}
			/>
			<br/>
			<button onClick={addTodo}>Agregar</button>
			<br/>
			<List todos={todos}/>
		</div>
	)
};

export default App;
