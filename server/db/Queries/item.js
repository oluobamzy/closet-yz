const db = require('../../routes/configs/db.config');
const getAllItems =  () => {
  return db.query('SELECT * FROM item').then((data)=> data.rows).catch((e)=> console.log(e));
}
const getItemById =  (id) => {
  return db.query('SELECT * FROM item WHERE id = $1', [id]).then((data)=> data.rows).catch((e)=> console.log(e));
}

const addItem = (item) => { // Pass the 'item' object as a parameter
  const {
    item_name,
    category,
    color,
    purchase_date,
    img_src,
    description,
    season,
    closet_id,
    size,
    brand_name
  } = item;

  // Use the correct number of placeholders in the SQL query and provide all parameters
  const queryString = `
    INSERT INTO item (item_name, category, color, purchase_date, img_src, description, season, closet_id, size, brand_name)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *`; // Assuming you want to return the inserted item

  const values = [
    item_name,
    category,
    color,
    purchase_date,
    img_src,
    description,
    season,
    closet_id,
    size,
    brand_name
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};
const updateItem = (item) => { 
  const {
    item_name,
    category,
    color,
    purchase_date,
    img_src,
    description,
    season,
    closet_id,
    size,
    brand_name
  } = item;

  // Use the correct number of placeholders in the SQL query and provide all parameters
  const queryString = `
    UPDATE item SET item_name = $1, category = $2, color = $3, purchase_date = $4, img_src = $5, description = $6, season = $7, closet_id = $8, size = $9, brand_name = $10
    WHERE id = $11
    RETURNING *`; // Assuming you want to return the inserted item

  const values = [
    item_name,
    category,
    color,
    purchase_date,
    img_src,
    description,
    season,
    closet_id,
    size,
    brand_name,
    item.id
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
}

const deleteAllItems = () => {
  return db.query('DELETE FROM item').then((data) => data.rows).catch((e) => console.log(e));
}


module.exports = { getAllItems, getItemById, addItem , deleteAllItems, updateItem};