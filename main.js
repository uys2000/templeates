const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const port = 3000;

const apiRouter = require("./routes/api.js");
const webRouter = require("./routes/web.js");

const corsConfiguration = {
  origin:  ["http://mehmetuysal.tech", /\.example2\.com$/],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 100,
};

app.use(cors(corsConfiguration));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);
app.use("/", webRouter);

app.listen(port, () => {
  console.log(`
App runs on port ${port}
You can test at http://localhost:${port}`);
});
