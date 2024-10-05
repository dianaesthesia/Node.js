const express = require('express');

const app = express(); //викликаємо експрес як функцію

app.use(express.json());
app.use(express.urlencoded({extended: true})); //вміє читати query params

const PORT = 5100; //винесений порт

const users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]

app.get('/users', (req, res) => {
    try {
        res.json(users);
    } catch (e) {
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);

    res.status(201).json({message: 'User has been added successfully'});
})

app.put('/users/:id', (req, res) => {
    console.log(req.params.id); //console.log(req.params)

    const {id} = req.params;
    const updatedUser = req.body;

    users[id] = updatedUser; //чи конвертувати users[+id] = updatedUser
    res.status(200).json({
        message: 'User has been updated successfully',
        data: updatedUser
    });
})

app.delete('/users/:id', (req, res) => {
    console.log(req.params.id);

    const {id} = req.params;

    users.splice(id, 1);
    res.status(200).json({message: 'User has been deleted successfully'});
})

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
}) //звернення до нашої аплікації, що вона буде слухати певний порт
