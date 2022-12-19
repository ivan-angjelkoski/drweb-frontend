import React from 'react';
import { GiSittingDog } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="bg-blue-200 text-gray-800">
			<div className="max-w-5xl mx-auto p-3 flex justify-between items-center">
				<Link
					to={'/'}
					className="flex items-center space-x-3 text-3xl"
				>
					<GiSittingDog />{' '}
					<span>
						Dogs<b>Api</b>
					</span>
				</Link>
				<ul className="flex items-center space-x-2">
					<li>
						<Link
							className="px-4 py-2 inline-block rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
							to={'/random'}
						>
							Random
						</Link>
					</li>
					<li>
						<Link
							className="px-4 py-2 inline-block rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
							to={'/new'}
						>
							New Image/Breed
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
