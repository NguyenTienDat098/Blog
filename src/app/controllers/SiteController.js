class SiteController {
    home(req, res) {
        res.render('home');
    }
    search(req, res) {
        if (req !== undefined) {
            console.log(req.body);
        }
        console.log(req.query);
        res.render('search');
    }
}
module.exports = new SiteController();
