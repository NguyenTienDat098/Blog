class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('newss');
    }
}
module.exports = new NewsController();
