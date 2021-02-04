const cats = require('../models/CatModel');
module.exports = async (id) => {
    try {
        const cat = await cats.findOne({
            where: {
                id
            }
        });
        return await cat;
    } catch (err) {
        return err;
    }
}