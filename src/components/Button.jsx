import React from 'react';

const Button = (props) => {
	return (
		<button
			{...props}
			className={`inline-block px-4 py-2 border-transparent cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-200 ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
