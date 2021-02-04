const { catsList } = require('../models/cat1');
const cat = require('../models/CatModel');
const getCats = require('../controllers/getCats');
module.exports = async (data) => {
    try {
        console.log(data);
        await cat.create(data);
        let res = await getCats();
        return res;
    } catch (err) {
        return err;
    }

}