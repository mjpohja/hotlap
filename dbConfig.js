var fs = require("fs");
var prodConfig;
try{
	prodConfig = fs.readFileSync("prodDB.conf").toString();
}
catch(e) {
	console.log("Database url for production not found");
}
fs.stat
var connectionString = prodConfig || 'postgres://postgres:hotlap@localhost:32768/postgres';
module.exports = connectionString;