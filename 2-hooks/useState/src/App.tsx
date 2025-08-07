import { useState } from 'react';

interface Usuario {
	id: string | number,
	name: string,
	email: string
}
type param = 0 | 1;
const App = () => {
	const [counter, setCounter] = useState<number>(0);
	const [user, setUser] = useState<Usuario>();
	
	const incrementar = (n: param = 1): void => {
		setCounter(counter + n);
	};
	const descrementar = (n: param = 1): void => {
		setCounter(counter - n);
	};
	const reset = (n: param = 0): void => {
		setCounter(n);
	};
	const changeUser = (): void => {
		setUser({
			id: 1,
			name: 'Jesus Gonzalez',
			email: 'jesus@gmail.com'
		})
	}
	
	return (
		<div className="App">
			{ counter }
			<br/>
			<button onClick={() => incrementar()}>Incrementar</button>
			<button onClick={() => descrementar()}>Descrementar</button>
			<button onClick={() => reset()}>reset</button>
			<button onClick={() => changeUser()}>Cambiar usuario</button>
		</div>
	)
};

export default App;
