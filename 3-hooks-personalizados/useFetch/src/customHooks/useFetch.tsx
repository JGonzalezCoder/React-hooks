import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
	const [datos, setDatos] = useState({});
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(url);
			const data = await response.json();
			setDatos(data);
			setLoading(true);
			
		}
		getData();
	},[])
	return {
		loading,
		datos
	}
}

export default useFetch;
