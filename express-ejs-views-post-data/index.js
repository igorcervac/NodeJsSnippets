const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000);
app.use(express.urlencoded({extended: true}));

const tasks = 
    [
        { description: 'Learn JavaScript', done: true }, 
        { description: 'Learn React.js', done: true }, 
        { description: 'Learn TypeScript', done: true },
        { description: 'Learn Node.js', done: false }
    ];

app.get('/', (req, res) => {    
    res.render('index', { tasks });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Title', body: 'Body'});
});

app.get('/about-us', (req, res) => {
    res.redirect('about');
});

app.post('/add', (req, res) => {
    console.log(req.body);
    tasks.push(req.body);
    res.redirect('/');
});

app.use((req, res) => {
    res.status(404).render('404');
});
