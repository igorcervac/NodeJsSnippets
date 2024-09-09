const home_index = (req, res) => {    
    res.redirect('/tasks');
};

const home_about = (req, res) => {
    res.render('home/about', { title: 'Title', body: 'Body'});
};

module.exports = { home_index, home_about }