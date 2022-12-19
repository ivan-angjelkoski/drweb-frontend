import React from 'react';
import BreedsList from '../components/BreedsList';

const Home = () => {
	return (
		<div>
			<h1 className="py-10 text-4xl">List Of All Breeds</h1>
			<BreedsList />
		</div>
	);
};

export default Home;
