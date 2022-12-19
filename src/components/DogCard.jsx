import React from 'react';
import { FaDog, FaRandom, FaImage } from 'react-icons/fa';
import Button from './Button';
import { Link } from 'react-router-dom';

const DogCard = ({ breed }) => {
	return (
		<div className="border border-blue-200 rounded-2xl p-4 group hover:border-blue-400">
			<h1 className="flex items-center space-x-2 text-3xl border-b-2 mb-4 pb-2 group-hover:text-blue-400 transition-all duration-300">
				<FaDog />
				<span className="capitalize">{breed.name}</span>
			</h1>
			<div className="grid gap-4">
				<Link to={`/breed/${breed.name}/random`}>
					<Button className="flex items-center space-x-2 w-full">
						<FaRandom />
						<span className="capitalize">Random {breed.name}</span>
					</Button>
				</Link>
				<Link to={`breed/${breed.name}/all`}>
					<Button className="flex items-center space-x-2 w-full">
						<FaImage /> <span className="capitalize">All {breed.name}</span>
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default DogCard;
