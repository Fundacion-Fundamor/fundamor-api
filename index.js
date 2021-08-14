const config = require("./src/config");
const express = require("express");
const app = express();

//enable express.json (in the request the header should be application/json)
app.use(express.json({ extended: true }));

app.use("/api/employee", require("./src/routes/employee"));
// app.use("/api/animal", require("./routes/animal"));
// app.use("/api/adoption", require("./routes/adoption"));
// app.use("/api/adopter", require("./routes/adopter"));
// app.use("/api/news", require("./routes/news"));
// app.use("/api/foundation", require("./routes/foundation"));
// app.use("/api/analytics", require("./routes/analytics"));

app.listen(config.port, () => {
	console.log(`App listening at http://localhost:${config.port}`);
});
