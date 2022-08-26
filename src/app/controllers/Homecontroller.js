class Homecontroller {
    index(req, res) {
        res.render('home');
    }
}

module.exports = new Homecontroller();
