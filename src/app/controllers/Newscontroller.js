class Newscontroller {
    //[get]/news
    index(req, res) {
        res.render('news');
    }
    //[get]/show
    show(req, res) {
        res.send('Detail of News');
    }
}

module.exports = new Newscontroller();
