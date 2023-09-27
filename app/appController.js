
const appController = {
    homePage: (req, res) => {
        console.log('Je suis sur la page')
        res.render('homePage');
    },
}


module.exports = appController;