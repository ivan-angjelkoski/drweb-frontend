import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
	const [selectedFile, setselectedFile] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		if (selectedFile == null) {
			return;
		}
		formData.append('image', selectedFile);
		formData.append('breedName', 'husky');
		try {
			const data = axios.post('http://localhost:3001/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
		} catch (err) {}
	};
	const handleChange = (e) => {
		setselectedFile(e.target.files[0]);
		console.log(e.target.files[0]);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="file"
					onChange={handleChange}
				/>
				<button
					className="border p-2 rounded-md"
					type="submit"
				>
					submit
				</button>
			</form>
		</div>
	);
};

export default UploadForm;
