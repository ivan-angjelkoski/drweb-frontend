import axios from 'axios';
import React, { useState } from 'react';
import Button from '../components/Button';
import UploadForm from '../UploadForm';
import { FiUpload } from 'react-icons/fi';
import { ImSpinner4 } from 'react-icons/im';

const NewBreed = () => {
	const [breedName, setBreedName] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const reset = () => {
		setLoading(false);
		setError(false);
		setSuccess(false);
		setBreedName('');
		setSelectedFile(null);
	};
	const handleChange = (e) => {
		setSelectedFile(e.target.files[0]);
		// console.log(e.target.files[0]);
	};
	const handleSubmit = async (e) => {
		setLoading(true);
		setError(false);
		e.preventDefault();
		console.log('Handle Submit', selectedFile);
		const formData = new FormData();
		if (selectedFile == null) {
			return;
		}
		formData.append('image', selectedFile);
		formData.append('breedName', breedName);
		try {
			const data = await axios.post('http://localhost:3001/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			if (data.status !== 200) {
				throw new Error('Error');
			} else {
				setImageUrl(data.data.href);
				setSuccess(true);
			}
		} catch (err) {
			console.log(err);
			setError(err);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div>
			<h1 className="text-4xl my-10">New Breed</h1>
			<div className="px-4">
				<form
					onSubmit={handleSubmit}
					className="max-w-2xl mx-auto bg-gray-900 p-4 rounded-lg"
				>
					<div className="flex flex-col gap-2 mb-4">
						<label
							className="text-2xl"
							htmlFor="breedName"
						>
							Breed:
						</label>
						<input
							required
							value={breedName}
							onChange={(e) => setBreedName(e.target.value)}
							className="py-1 px-2 rounded-md bg-transparent border-white border"
							type="text"
							name="breedName"
							id="breedName"
						/>
					</div>
					<div className="my-2 space-x-2">
						<label htmlFor="file">File:</label>
						<input
							onChange={handleChange}
							type="file"
							id="file"
							required
						/>
					</div>
					<div className="mt-5">
						<Button
							disabled={success}
							type="submit"
							className="w-full"
						>
							{loading ? (
								<ImSpinner4 />
							) : success ? (
								<span>Uploaded!</span>
							) : (
								<span className="flex items-center justify-center space-x-2">
									<FiUpload />
									<span>Upload</span>
								</span>
							)}
						</Button>
					</div>
				</form>
				<div className="max-w-2xl mx-auto my-10">
					<img
						className="w-full"
						src={imageUrl}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default NewBreed;
