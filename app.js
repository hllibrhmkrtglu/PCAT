const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs")
const pageController = require("./Controller/pageController")


const app = express();

mongoose.connect("mongodb://localhost/pcat-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", pageController.getHomes);
app.get("/about", pageController.getAbout);
app.get("/add_post", pageController.getAddPost);
app.get("/post/:id", pageController.getDbİd);
app.post("/photos", pageController.getHome);


const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})