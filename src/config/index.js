const dotenv = require("dotenv");

const envFound = dotenv.config();
if (envFound.error) {
	// This error should crash whole process
	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
const creds = {
	env: process.env.NODE_ENV,
	port: process.env.PORT
};
  
module.exports = creds;