import express from "express";
import ejs from "ejs";

const app = express();
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.use(express.static("public"));

app.get("/", (_, res) => res.render("index"));

app.listen(2000);
