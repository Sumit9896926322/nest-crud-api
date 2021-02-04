require('dotenv').config();
const express = require('express');
const app = new express();
const port = 3000;
const path = require('path');
const Cat = require('./models/cat1.js');
const db = require('./config/conn');

const getCat = require('./controllers/getCat');
const addCats = require('./controllers/addCats');
const getCats = require('./controllers/getCats');
const updateCats = require('./controllers/updateCats');
const deleteCats = require('./controllers/deleteCats');

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})



app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));



//app.use(express.static(path.join('__dirname','/directory')));

app.set('views', path.join('__dirname', 'views'));

app.get('/', async (req, res) => {
    let result = await getCats();
    await res.send(result);
    // res.send(Cat.catsList);
});

app.get('/:id', async (req, res) => {

    if (isNaN(req.params.id))
        return res.send('id should be number only');
    let present = false;
    let data = await getCat(req.params.id);
    if (data)
        res.send(data);
    else
        res.send(`No Cat found with given id ${req.params.id}`)
    // Cat.catsList.map(cat => {
    //     if (cat.id == req.params.id) {
    //         if (!present) present = true;
    //         res.send(cat);
    //         return;
    //     }
    // });
});
app.post('/add', async (req, res) => {
    const data = req.body;

    const id = ++Cat.catNum;
    Cat.catsList.push(new Cat(id, data.name, data.age, data.breed));

    let allCats = await addCats(data);
    await console.log(allCats);
    res.send(allCats);
    //res.send(Cat.catsList); sendind from simple array
});

app.delete('/delete', async (req, res) => {

    if (isNaN(req.query.id))
        return res.send('id should be number only');



    let present = false;
    let allCats = await getCats()
    allCats.filter((cat) => {
        if (cat.id == req.query.id && !present)
            present = true;
        return cat.id != req.query.id

    });
    let result;
    if (present)
        result = await deleteCats(req.query.id);
    // present == true ? res.send(Cat.catsList) : res.send(`No Cat with given id ${req.query.id}`);
    present == true ? res.send(result) : res.send(`No Cat with given id ${req.query.id}`);
})

app.put('/update/:id', async (req, res) => {

    if (isNaN(req.params.id))
        return res.send('id should be number only');


    let present = false;
    Cat.catsList.map((cat, index) => {
        if (cat.id == req.params.id) {

            if (!present) present = true;

            const data = req.body;
            Cat.catsList[index] = new Cat(req.params.id, data.name, data.age, data.breed);
        }
    });
    let cats;
    if (present) {
        cats = await updateCats(req.params.id, req.body);
    }
    // res.send(present == false ? `No Cat with given id ${req.params.id}` : Cat.catsList);
    res.send(present == false ? `No Cat with given id ${req.params.id}` : cats);
})

app.listen(port, () => {
    console.log("App running on port 3000");
});



