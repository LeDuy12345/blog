class Inforcontroller {
    index(req, res) {
        res.send('Information');
    }
    more(req, res) {
        res.send('More infor');
    }
}

module.exports = new Inforcontroller();
