const db = require('../../routes/configs/db.config');
const getAllUsers =  () => {
  return db.query('SELECT * FROM users').then((data)=> data.rows).catch((e)=> console.log(e));
}
const getUserById =  (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]).then((data)=> data.rows).catch((e)=> console.log(e));
}
const addUser = (user) => { 
  const {
    username,
    first_name,
    last_name,
    email,
    password
  } = user;

  const queryString = `
    INSERT INTO users (username, first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`; 

  const values = [
    username,
    first_name,
    last_name,
    email,
    password
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
}

const deleteUser = (id) => {
  return db.query('DELETE FROM users WHERE id = $1', [id]).then((data)=> data.rows).catch((e)=> console.log(e));
};

module.exports = { getAllUsers, getUserById, addUser, deleteUser };