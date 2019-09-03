const axios = require('axios');
const { KEY } = process.env;
/* USER*/
let getCurrentUser = async (req, res) => {
	let info = await axios.get(`https://api.spotify.com/v1/me`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getUser = async (req, res) => {
	let { user_id } = req.body;
	let info = await axios.get(`https://api.spotify.com/v1/users/${user_id}`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
let getUserTopTracksorArtist = async (req, res) => {
	let { type } = req.body;
	let info = await axios.get(`https://api.spotify.com/v1/me/top/${type}`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
/* SEARCH*/
let Search = async (req, res) => {
	let { type } = req.body;
	let { query } = req.body;
	let info = await axios.get(`https://api.spotify.com/v1/search?q=${query}%205&type=${type}`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
/* ARTIST*/
let getAnArtist = async (req, res) => {
	let { artist_id } = req.body;
	let info = await axios.get(`https://api.spotify.com/v1/artists/${artist_id}`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getAnArtistTopTracks = async (req, res) => {
	let { artist_id } = req.body;
	let { country } = req.body;
	let info = await axios.get(`https://api.spotify.com/v1/artists/${artist_id}/top-tracks?country=${country}`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getAnArtistAlbums = async (req, res) => {
	let { artist_id } = req.body;

	let info = await axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
/* FOLLOW*/
let getFollowartistorUser = async (req, res) => {
	let { artist_id } = req.body;

	let info = await axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let followUser = async (req, res) => {
	let { playlist_id } = req.body;
	let info = await axios.put(`https://api.spotify.com/v1/playlists/${playlist_id}/followers`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
let unFollowUser = async (req, res) => {
	// let { playlist_id } = req.body;
	let info = await axios.delete(`https://api.spotify.com/v1/me/following`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
/*Player */
let pausePlayer = async (req, res) => {
	let info = await axios.put(`https://api.spotify.com/v1/me/player/pause`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let skipToNextPlayer = async (req, res) => {
	let info = await axios.post(`https://api.spotify.com/v1/me/player/next`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let goToLastPlayedPlayer = async (req, res) => {
	let info = await axios.post(`https://api.spotify.com/v1/me/player/previous`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let repeatPlayer = async (req, res) => {
	let info = await axios.put(`https://api.spotify.com/v1/me/player/repeat`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let shufflePlayer = async (req, res) => {
	let info = await axios.put(`https://api.spotify.com/v1/me/player/shuffle`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getRecentlyPlayed = async (req, res) => {
	let info = await axios.get(`https://api.spotify.com/v1/me/player/recently-played`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getCurrentlyPlayed = async (req, res) => {
	let info = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

/*Playlist */

let addToPlaylist = async (req, res) => {
	let { playlist_id } = req.body;
	let info = await axios.post(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getUserPlaylist = async (req, res) => {
	let info = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let deleteFromPlaylist = async (req, res) => {
	let { playlist_id } = req.body;
	let info = await axios.delete(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
		headers: {
			Authorization: `Bearer ${ID}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
module.exports = {
	getCurrentUser,
	getUser,
	Search,
	getAnArtist,
	getAnArtistTopTracks,
	getAnArtistAlbums,
	getUserTopTracksorArtist,
	getFollowartistorUser,
	followUser,
	unFollowUser,
	pausePlayer,
	skipToNextPlayer,
	getRecentlyPlayed,
	getCurrentlyPlayed,
	goToLastPlayedPlayer,
	repeatPlayer,
	shufflePlayer,
	addToPlaylist,
	getUserPlaylist,
	deleteFromPlaylist
};
