const db = require('../../routes/configs/db.config');
const getAllItems =  () => {
  return db.query('SELECT * FROM item').then((data)=> data.rows).catch((e)=> console.log(e));
}

module.exports = { getAllItems };