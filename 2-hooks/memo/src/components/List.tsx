import { memo } from 'react';
import Item from './Item';
import { Props } from '../interfaces';

const List = memo(( props: Props ) => {
	return <>
		{
			props.todos?.map(item => <Item item={item}/>)
		}
	</>
})

export default List;
