import { Props } from '../interfaces';

const Item = (props: Props) => {
	return <>{ props.item?.task }</>
}

export default Item;
