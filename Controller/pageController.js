const Photo = require("../modules/Photo");

exports.getHomes = async (req, res) => {
    
    const post = await Photo.find({})

    res.render("index", {
        post
    })

    // const page = req.query.page || 1;
    // const postPage = 2;

    // const totalPost = await Photo.find().countDocuments()
    // const post = await Photo.find({})
    //     .skip((page - 1) * postPage)
    //     .limit(totalPost)
}

exports.getAbout = (req, res) => {
    res.render("about")
}

exports.getAddPost = (req, res) => {
    res.render("add_post")
}

exports.getDbİd = async (req, res) => {
    const post = await Photo.findById(req.params.id)
    res.render("post", {
        post
    })
}

exports.getHome = async (req, res) => {
    await Photo.create(req.body)
    res.redirect("/")
}