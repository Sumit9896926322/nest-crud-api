const conn = require('../config/conn');
const cats = require('../models/CatModel');
module.exports = async () => {
    try {
        let result = [];
        const catsList = await cats.findAll();

        await catsList.map(cat => result.push(cat.dataValues));
        return await result;
    } catch (err) {
        return err;
    }
}