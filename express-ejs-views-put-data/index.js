const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

// var LocalStorage = require('./localStorage');
// localStorage = new LocalStorage();

app.get('/tasks', (req, res) => { 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
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
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];    
    tasks.push({...req.body, done: false, id: tasks.length});

    localStorage.setItem('tasks', JSON.stringify(tasks));

    res.redirect('/');
});

app.delete('/tasks/:id', (req, res) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];   
    tasks.splice(req.params.id, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    res.json({redirect: '/tasks'});
});

app.put('/tasks/:id', (req, res) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.findIndex(x => x.id == req.params.id);
    tasks.splice(index, 1, req.body);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    res.json({redirect: '/tasks'});
})

app.use((req, res) => {
    res.status(404).render('404');
});
