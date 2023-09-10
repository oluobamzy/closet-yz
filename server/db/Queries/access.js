const db = require('../../routes/configs/db.config');
const grantAccess = (user_id) => {
  const queryString = `
  SELECT *
  FROM closet AS c
  INNER JOIN users AS u ON c.users_id = u.id
  WHERE u.id = $1
  `;
  const values = [user_id];
  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
}

const grantAccessToSpecificCloset = (user_id, closet_id) => {
  const queryString = `
  SELECT *
  FROM closet AS c
  INNER JOIN users AS u ON c.users_id = u.id
  WHERE u.id = $1 AND c.id = $2;`;
  const values = [user_id, closet_id];
  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
}

const addToAccess = (user_id, closet_id) => {
  const queryString = `
  Insert INTO access (users_id, closet_id) VALUES ($1, $2) RETURNING *;
  `;
  const values = [user_id, closet_id];
  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

module.exports = { grantAccess, addToAccess, grantAccessToSpecificCloset };