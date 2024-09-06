const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000);
app.use(express.urlencoded({extended: true}));

const tasks = 
    [
        { id: 0, description: 'Learn JavaScript', done: true }, 
        { id: 1, description: 'Learn React.js', done: true }, 
        { id: 2, description: 'Learn TypeScript', done: true },
        { id: 3, description: 'Learn Node.js', done: false }
    ];

app.get('/tasks', (req, res) => {    
    res.render('index', { tasks });
});

app.get('/', (req, res) => {    
    res.redirect('/tasks');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Title', body: 'Body'});
});

app.get('/about-us', (req, res) => {
    res.redirect('about');
});

app.post('/add', (req, res) => {
    console.log(req.body);
    tasks.push({...req.body, id: tasks.length});
    res.redirect('/');
});

app.delete('/tasks/:id', (req, res) => {
    tasks.splice(req.params.id, 1);
    res.json({redirect: '/tasks'});
});

app.use((req, res) => {
    res.status(404).render('404');
});
