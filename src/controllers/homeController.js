
let getHomePage = async (req, res) => {
    return res.render('home/homepage.ejs');
}
module.exports = {
    getHomePage: getHomePage,
}