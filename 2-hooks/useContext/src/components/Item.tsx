import { Props } from '../interfaces';

const Item = (props: Props) => {
	return <>
		{ props.item?.task }
		<button onClick={() => props.deleteItem(props.item?.id)}>Eliminar tarea</button>
		<br/>
	</>
}

export default Item;
