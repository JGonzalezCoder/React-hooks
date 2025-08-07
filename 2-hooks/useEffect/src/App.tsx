import { useState, useEffect } from 'react';
import Resize from './components/resize';

interface Usuario {
	id: string | number,
	name: string,
	email: string
}
type param = 0 | 1;
const App = () => {
	const [counter, setCounter] = useState<number>(0);
	const [user, setUser] = useState<Usuario>();
	const [show, setShow] = useState<boolean>(false);
	
	useEffect(() => {
		console.log('mi aplicacion...');
	})
	useEffect(() => {
		console.log('contador 1');
	}, [counter])
	
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
	const setShowResize = (option: boolean): void => {
		setShow(option);
	}
	
	return (
		<div className="App">
			{ counter }
			<br/>
			{ JSON.stringify(user) }
			<br/>
			<button onClick={() => setShowResize(!show)}>Show Resize</button>
			{ show && <Resize/>}
			<br/>
			<button onClick={() => incrementar()}>Incrementar</button>
			<button onClick={() => descrementar()}>Descrementar</button>
			<button onClick={() => reset()}>reset</button>
			<button onClick={() => changeUser()}>Cambiar usuario</button>
		</div>
	)
};

export default App;
