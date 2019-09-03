import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
function App() {
	return <Router>{routes}</Router>;
}

export default App;

// https://open.spotify.com/embed?uri=3TVXtAsR1Inumwj472S9r4
// <iframe
// 				src={`https://open.spotify.com/embed?uri=spotify:track:2kEDTny6qyWoyNUPYiLzTW`}
// 				width="300"
// 				height="140"
// 				frameBorder="0"
// 				allowtransparency="true"
// 				allow="encrypted-media"
// 			/>
