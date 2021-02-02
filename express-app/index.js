const express = require('express');
const app = new express();
const port = 3000;

const Cat = require('./models/cat1.js');

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send(Cat.catsList);
});

app.get('/:id', (req, res) => {
    Cat.catsList.filter(cat => {
        console.log(cat.id, req.param);
        if (cat.id == req.param.id) {
            res.send(cat);
            return;
        }
    });
    res.send(Cat.catsList);
});
app.post('/add', (req, res) => {
    const data = req.body;
    const id = ++Cat.catNum;
    Cat.catsList.push(new Cat(id, data.name, data.age, data.breed));
    res.send('New Cat Added ');
});

app.delete('/delete/:id', (req, res) => {
    Cat.catsList.filter((cat) => cat.id != req.param.id);
    res.send('deleted');
})

app.patch('/update/:id', (req, res) => {
    Cat.catsList.map((cat, index) => {
        if (cat.id == req.param.id) {
            const data = req.body;
            console.log(Cat.catsList);
            Cat.catsList[i] = new Cat(index, data.name, data.age, data.breed);
        }
    });
    res.send(Cat.catsList);
})

app.listen(3000, () => {
    console.log("App running on port 3000");
});



