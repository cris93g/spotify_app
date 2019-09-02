import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<iframe
				src={`https://open.spotify.com/embed?uri=spotify:track:2kEDTny6qyWoyNUPYiLzTW`}
				width="300"
				height="80"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
			/>
		</div>
	);
}

export default App;

{
	/* <iframe
	src={`https://open.spotify.com/embed?uri=3TVXtAsR1Inumwj472S9r4`}
	width="300"
	height="80"
	frameBorder="0"
	allowtransparency="true"
	allow="encrypted-media"
/>; */
}

// https://open.spotify.com/embed?uri=3TVXtAsR1Inumwj472S9r4
