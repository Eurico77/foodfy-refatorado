const express = require("express");
const routes = require("./routes");
const nunjucks = require("nunjucks");


const app = express();

app.use(express.json());
app.use(routes)
app.use(express.static(`${__dirname}/public`));


app.set("view engine", "njk");
nunjucks.configure("src/views", {
  express: app,
});

app.listen(3000);
console.log("server is runing");
