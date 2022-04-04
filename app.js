const express = require("express");
const app = express();
const path = require("path");
// const helmet = require("helmet");
app.use(express.static("./src/public"));
app.use(express.static(path.join(__dirname, "/src/public/site")));
app.use("/animals/form", express.static(path.join(__dirname, "/src/public/site")));
app.use("/animals/detail", express.static(path.join(__dirname, "/src/public/site")));

app.use("/post/detail", express.static(path.join(__dirname, "/src/public/site")));


// app.use(helmet());
// app.disable('x-powered-by');

const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const employeesRoutes = require("./src/routes/employees");
const authRoutes = require("./src/routes/auth");
const postRoutes = require("./src/routes/post");
const foundationRoutes = require("./src/routes/foundations");
const adoptersRoutes = require("./src/routes/adopters");
const animalsRoutes = require("./src/routes/animals");
const adoptionsRoutes = require("./src/routes/adoptions");
const questionsRoutes = require("./src/routes/questions");
const questionsOptionsRoutes = require("./src/routes/questionOptions");
const adoptionQuestionsRoutes = require("./src/routes/adoptionQuestions");
const trackingRoutes = require("./src/routes/tracking");
const animalImagesRoutes = require("./src/routes/animalImages");
const postImagesRoutes = require("./src/routes/postImages");
const analyticsRoutes = require("./src/routes/analytics");


//enable express.json (in the request the header should be application/json)
app.use(express.json({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

//Routes setting up handle requests
app.use("/api/employees", employeesRoutes);
app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/foundations", foundationRoutes);
app.use("/api/adopters", adoptersRoutes);
app.use("/api/animals", animalsRoutes);
app.use("/api/adoptions", adoptionsRoutes);
app.use("/api/questions", questionsRoutes);
app.use("/api/questionOptions", questionsOptionsRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/adoptionQuestions", adoptionQuestionsRoutes);
app.use("/api/animalImages", animalImagesRoutes);
app.use("/api/postImages", postImagesRoutes);
app.use("/api/analytics", analyticsRoutes);

//app.use sets up middleware
app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});


// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
	res.status(200).json({
		message: "It works!"
	});
});


module.exports = app;

