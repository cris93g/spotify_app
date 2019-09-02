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
/* PLAYLIST*/

module.exports = {
	getCurrentUser,
	getUser,
	Search,
	getAnArtist,
	getAnArtistTopTracks,
	getAnArtistAlbums,
	getUserTopTracksorArtist
};
