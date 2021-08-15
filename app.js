const express = require("express");
const app = express();
const morgan = require("morgan");

const employeesRoutes = require("./src/routes/employees");
const authRoutes = require("./src/routes/auth");
const newsRoutes= require("./src/routes/news");

// const animalsRoutes= require("./routes/animals");
// const adoptionsRoutes= require("./routes/adoptions");
// const adoptersRoutes= require("./routes/adopters");
// const foundationRoutes= require("./routes/foundations");
// const analyticsRoutes = require("./routes/analytics");
//enable express.json (in the request the header should be application/json)

app.use(express.json({ extended: true }));
app.use(morgan("dev"));

//Routes setting up handle requests
app.use("/api/employees", employeesRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/auth", authRoutes);

// app.use("/api/animals", animalsRoutes);
// app.use("/api/adoptions", adoptionsRoutes);
// app.use("/api/adopters", adoptersRoutes);
// app.use("/api/foundations", foundationRoutes);
// app.use("/api/analytics", analyticsRoutes);


//app.use sets up middleware
app.use((req, res, next)=>{
	const error = new Error("Endpoint Not found"); 
	error.status = 404; 
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

app.use((req, res, next) => {
	res.status(200).json({
		message: "It works!"
	});
});

module.exports = app;

