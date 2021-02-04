const conn = require('../config/conn');
const cat = require('../models/CatModel');
const getCats = require('./getCats');

module.exports = async (id) => {
    try {
        await cat.destroy({
            where: {
                id
            }
        });
        let reuslt = await getCats();
        return reuslt;
    } catch (err) {
        return err;
    }

} 