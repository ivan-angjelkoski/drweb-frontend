import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllBreed from './pages/AllBreed';
import Home from './pages/Home';
import NewBreed from './pages/NewBreed';
import Random from './pages/Random';
import RandomBreed from './pages/RandomBreed';
import UploadForm from './UploadForm';

const App = () => {
	return (
		<>
			<Navbar />
			<main className="max-w-5xl mx-auto p-3">
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/random"
						element={<Random />}
					/>
					<Route
						path="breed/:breedName/random"
						element={<RandomBreed />}
					/>
					<Route
						path="breed/:breedName/all"
						element={<AllBreed />}
					/>
					<Route
						path="/new"
						element={<NewBreed />}
					/>
				</Routes>
			</main>
		</>
	);
};

export default App;
