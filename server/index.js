require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const { json } = require('body-parser');

const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(json());

app.get('/login', function(req, res) {
	let client_id = `398bafcde7984f5693d66c17e6111777`;
	let redirect_uri = 'http://localhost:3000/#/';
	let scopes =
		'user-read-private user-read-email user-read-recently-played user-modify-playback-state user-read-playback-state user-top-read user-follow-read';
	let token = `token`;
	res.redirect(
		'https://accounts.spotify.com/authorize' +
			'?response_type=' +
			token +
			'&client_id=' +
			client_id +
			(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
			'&redirect_uri=' +
			encodeURIComponent(redirect_uri)
	);
});

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});

// BQBKGxKWKznnFABegZE1DYUlaDwcmY2vmYmZdywyZBeGMgd02Kfgae3SWxm6l1hCDPyjKQchxeWkZyZ3TPVz3MRWcwVof3k5wUcXdehaYM_EvsRl-hR_xskpU2HhWtl9_N5Twkoxyqj3lY1_nPcYPKzUL0-5UDay2_yYdYMBmXP3NgZboZ9F

// ce8s5zabu74clhlvlpk6fv1p0  ----id
