const http = require("http");
const config = require("./src/config");
const app = require("./app");

const server = http.createServer(app);

server.listen(config.port, () => {
	console.log(`App listening at http://localhost:${config.port}`);
});
