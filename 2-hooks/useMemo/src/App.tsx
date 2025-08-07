import { useState, useCallback, useMemo } from 'react';
import List from './components/List';
import Item from './components/Item';
import { Todo } from './interfaces';

const App = () => {
	const [search, setSearch] = useState<string>('');
	const [filtro, setFiltro] = useState<string>('');
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
		const noEliminados = todos.filter(item => item.id !== id);
		setTodos(noEliminados);
	}, [todos]);
	
	const todosComputados = useMemo(() => todos.filter(items => {
		return items.task.toLowerCase().includes(filtro.toLowerCase());
	}), [filtro]);
	
	const filtrarme = () => {
		setFiltro(search);
	}

	return (
		<div className="App">
			<input 
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<br/>
			<button onClick={addTodo}>Agregar</button>
			<button onClick={filtrarme}>Filtrar</button>
			<br/>
			<List todos={todosComputados} deleteItem={deleteItem}/>
		</div>
	)
};

export default App;
