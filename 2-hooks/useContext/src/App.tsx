import { useContext } from 'react';
import { Context } from './context/AppContext';

const App = () => {
	const state = useContext(Context);

	return (
		<div className="App">
			{ JSON.stringify(state) }
		</div>
	)
};

export default App;
