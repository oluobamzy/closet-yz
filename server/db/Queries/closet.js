const db = require('../../routes/configs/db.config');
const addCloset = (closet) => { 
  const {
    closet_name,
    users_id,
    description
  } = closet;

  const queryString = `
    INSERT INTO closet (closet_name, users_id, description)
    VALUES ($1, $2, $3)
    RETURNING *;`; 

  const values = [
    closet_name,
    users_id,
    description
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};
const getAllClosets = (id) => {
  queryString = `
  SELECT * FROM closet WHERE users_id = $1, RETURNING *;`;
  const values = [id];
  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));

}
module.exports = {addCloset, getAllClosets};