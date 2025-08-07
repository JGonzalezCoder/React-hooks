import { State, Provider } from '../interfaces';
import { Context } from './AppContext';

const STATE_INICIAL: State = {
	id: 10,
	otro: 'lo que sea'
}

const Provider = ({ children }: Provider) => {
	return (
		<Context.Provider value={{ STATE_INICIAL }}>
			{ children }
		</Context.Provider>
	)
}

export default Provider;
