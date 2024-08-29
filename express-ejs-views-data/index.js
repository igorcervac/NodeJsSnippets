const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    const certifications = [{ title: 'AZ-900', year: 2022 }, { title: 'AZ-204', year: 2023 }, { title: 'AZ-400', year: 2023 }];
    res.render('index', { certifications });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Title', body: 'Body'});
});

app.get('/about-us', (req, res) => {
    res.redirect('about');
});

app.use((req, res) => {
    res.status(404).render('404');
});
