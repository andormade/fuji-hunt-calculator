const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 1234;

const getContentType = file => {
	switch (path.extname(file)) {
		case '.html':
			return 'text/html';
		case '.js':
			return 'text/javascript';
		case '.css':
			return 'text/css';
		default:
			return 'text/plain';
	}
};

const server = http.createServer((req, res) => {
	console.log(req.url);

	const file = req.url === '/' ? './index.html' : '.' + req.url;

	fs.readFile(file, (err, data) => {
		if (err) {
			res.writeHead(404);
			return res.end();
		}

		const contentType = getContentType(file);
		const contentLength = data.length;

		res.writeHead(200, {
			'Content-Length': contentLength,
			'Content-Type': `${contentType}; charset=UTF-8`,
		});

		res.end(data);
	});
});

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);