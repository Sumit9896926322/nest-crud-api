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

    if (isNaN(req.params.id))
        return res.send('id should be number only');
    let present = false;
    Cat.catsList.map(cat => {
        if (cat.id == req.params.id) {
            if (!present) present = true;
            res.send(cat);
            return;
        }
    });
    if (!present) res.send(`No Cat found with given id ${req.params.id}`);
});
app.post('/add', (req, res) => {
    const data = req.body;
    const id = ++Cat.catNum;
    Cat.catsList.push(new Cat(id, data.name, data.age, data.breed));
    res.send(Cat.catsList);
});

app.delete('/delete', (req, res) => {

    if (isNaN(req.query.id))
        return res.send('id should be number only');

    let present = false;
    Cat.catsList = Cat.catsList.filter((cat) => {
        if (cat.id == req.query.id && !present)
            present = true;
        return cat.id != req.query.id

    });
    present == true ? res.send(Cat.catsList) : res.send(`No Cat with given id ${req.query.id}`);
})

app.put('/update/:id', (req, res) => {

    if (isNaN(req.params.id))
        return res.send('id should be number only');


    let present = false;
    Cat.catsList.map((cat, index) => {
        if (cat.id == req.params.id) {

            if (!present) present = true;

            const data = req.body;
            console.log(Cat.catsList);
            Cat.catsList[index] = new Cat(req.params.id, data.name, data.age, data.breed);
        }
    });
    res.send(present == false ? `No Cat with given id ${req.params.id}` : Cat.catsList);
})

app.listen(port, () => {
    console.log("App running on port 3000");
});



