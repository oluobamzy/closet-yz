const db = require('../../routes/configs/db.config');
const getAllUsers =  () => {
  return db.query('SELECT * FROM users').then((data)=> data.rows).catch((e)=> console.log(e));
}
const getUserById =  (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]).then((data)=> data.rows).catch((e)=> console.log(e));
}

module.exports = { getAllUsers, getUserById };