import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useHttpFetch } from '../hooks/useHttpFetch';
import { ImLoop2 } from 'react-icons/im';
import { FaChevronLeft } from 'react-icons/fa';

const Random = () => {
	const breedName = useParams().breedName;

	const { data, loading, error, refetch } = useHttpFetch(`random`);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error...</h1>;
	return (
		<div>
			<div className="flex justify-center py-4 space-x-2">
				<Link to="/">
					<Button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600">
						<FaChevronLeft />
						<span>Back</span>
					</Button>
				</Link>
				<Button
					onClick={refetch}
					className="flex items-center space-x-2"
				>
					<ImLoop2 />
					<span>Refetch</span>
				</Button>
			</div>
			<div className="mx-auto max-w-4xl">
				<img
					className="w-full"
					src={data.href}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Random;
