import React from 'react';
import { Link } from 'react-router-dom';
import { useHttpFetch } from '../hooks/useHttpFetch';
import DogCard from './DogCard';

const BreedsList = () => {
	const { data, error, loading } = useHttpFetch('');
	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Error..</h1>;
	}
	return (
		<div className="grid p-3 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{data.map((dog) => (
				<DogCard
					key={dog.id}
					breed={dog}
				/>
			))}
		</div>
	);
};

export default BreedsList;
