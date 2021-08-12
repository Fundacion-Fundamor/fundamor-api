/**API for de project adoption platform
 * 
 * @author Neyder Figueroa Sánchez 
 * @author Andrés Felipe Llinás Rodríguez
 * 
 * @since 2021 Universidad del Quindío
 * @copyright Todos los derechos reservados
 */

const express = require("express");

//create server
const app = express();

//enable express.json (in the request the header should be application/json)
app.use(express.json({extended: true}));

//app port
const PORT = process.env.PORT ||4000;

//route import
app.use("/api/employees", require("./routes/employees"));
// app.use("/api/animals", require("./routes/animals"));
// app.use("/api/adoptions", require("./routes/adoptions"));
// app.use("/api/adopters", require("./routes/adopters"));
// app.use("/api/news", require("./routes/news"));
// app.use("/api/foundations", require("./routes/foundations"));
// app.use("/api/statistics", require("./routes/statistics"));

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});