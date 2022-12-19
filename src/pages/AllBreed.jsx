import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useHttpFetch } from '../hooks/useHttpFetch';

const AllBreed = () => {
	const breedName = useParams().breedName;
	const { data, error, loading } = useHttpFetch(`breed/${breedName}/all`);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error...</h1>;
	return (
		<div>
			<div>
				<h1 className="capitalize text-4xl my-10">{breedName}</h1>
				<Link to="/">
					<Button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600">
						<FaChevronLeft />
						<span>Back</span>
					</Button>
				</Link>
			</div>
			<div className="grid p-3 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{data.map((image) => (
					<div>
						<img
							className="w-full h-full object-cover"
							src={image.href}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllBreed;
