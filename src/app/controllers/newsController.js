
class newsController {
    // [GET] /news
    index(req, res){
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res){
        res.send("Hello World");
    }
}

module.exports = new newsController;
