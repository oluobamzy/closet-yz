const db = require('../../routes/configs/db.config');
const addCloset = (closet) => { 
  const {
    closet_name,
    user_id
  } = closet;

  const queryString = `
    INSERT INTO closet (closet_name, user_id)
    VALUES ($1, $2)
    RETURNING *`; 

  const values = [
    closet_name,
    user_id
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};
const getAllClosets =  () => {
  return db.query('SELECT * FROM closet').then((data)=> data.rows).catch((e)=> console.log(e));

}
module.exports = {addCloset, getAllClosets};