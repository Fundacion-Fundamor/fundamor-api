const config = require ("./src/config");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(config.port, () => {
	console.log(`App listening at http://localhost:${config.port}`);
});

module.exports = app;


