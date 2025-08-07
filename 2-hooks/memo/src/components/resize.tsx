import { useEffect, useState } from 'react';

const Resize = () => {
	const [resize, setResize] = useState(window.innerWidth);
	const wResize = () => {
		setResize(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener('resize', wResize);
		return () => {
			window.removeEventListener('resize', wResize);
		}
	})
	return <>
		{ resize }
	</>
}

export default Resize;
