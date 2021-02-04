const cat = require('../models/CatModel');
const getCats = require('./getCats');

module.exports = async (id, data) => {
    try {
        console.log(id, data);
        await cat.update({ name: data.name, age: data.age, breed: data.breed }, {
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