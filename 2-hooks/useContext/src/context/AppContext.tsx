import { createContext } from 'react';
import { State } from '../interfaces';

const STATE_INICIAL: State = {
	id: 10,
	otro: 'lo que sea'
}

export const Context = createContext({ STATE_INICIAL });
