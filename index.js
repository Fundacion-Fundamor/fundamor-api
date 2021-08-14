const config = require("./src/config");
const express = require("express");
const app = express();

//enable express.json (in the request the header should be application/json)
app.use(express.json({ extended: true }));

app.use("/api/employees", require("./src/routes/employees"));
// app.use("/api/animals", require("./routes/animals"));
// app.use("/api/adoptions", require("./routes/adoptions"));
// app.use("/api/adopters", require("./routes/adopters"));
// app.use("/api/news", require("./routes/newss"));
// app.use("/api/foundations", require("./routes/foundations"));
// app.use("/api/analytics", require("./routes/analytics"));

app.listen(config.port, () => {
	console.log(`App listening at http://localhost:${config.port}`);
});
