import { useLayoutEffect, useRef, useState } from 'react';

const Input = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState<string>('input...');
	useLayoutEffect(() => {
		const element = inputRef.current;
	})
	return <>
		<input
			ref={inputRef}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	</>
}

export default Input;
