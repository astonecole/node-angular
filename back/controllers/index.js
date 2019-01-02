// controllers/index.js

exports.home = (req, res) => {
    res.render('home', { title: 'Titre de ma page' });
};
