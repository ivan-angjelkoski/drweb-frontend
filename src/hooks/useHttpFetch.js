import { useState, useEffect } from 'react';
import { httpAxios } from '../main';

export const useHttpFetch = (path) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	const getData = async () => {
		setError(false);
		setLoading(true);

		try {
			const { status, data, headers } = await httpAxios.get(path);
			if (status == 200) {
				setData(data);
			} else {
				throw new Error('Error');
			}
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, [path]);

	return { loading, error, data, refetch: getData };
};
