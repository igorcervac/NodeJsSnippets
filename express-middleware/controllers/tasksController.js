var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

// var LocalStorage = require('./localStorage');
// localStorage = new LocalStorage();

const tasks_get = (req, res) => { 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    res.render('tasks/index', { tasks });
}

const tasks_post = (req, res) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];    
    tasks.push({...req.body, done: false, id: tasks.length});

    localStorage.setItem('tasks', JSON.stringify(tasks));

    res.redirect('/');
}

const tasks_put =  (req, res) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.findIndex(x => x.id == req.params.id);
    tasks.splice(index, 1, req.body);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    res.json({redirect: '/'});
}

const tasks_delete =  (req, res) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];   
    tasks.splice(req.params.id, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    res.json({redirect: '/tasks'});
}

module.exports = { tasks_get, tasks_post, tasks_put, tasks_delete }