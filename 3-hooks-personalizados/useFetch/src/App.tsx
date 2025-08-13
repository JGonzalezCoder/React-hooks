import useFetch from './customHooks/useFetch';

const App = () => {
	const uFetch = useFetch('https://jsonplaceholder.typicode.com/todos/1');
	return (
		<div className="App">
			{ uFetch.loading? <span>{ JSON.stringify(uFetch.datos) }</span> : <span>Cargando...</span>}
		</div>
	)
};

export default App;
