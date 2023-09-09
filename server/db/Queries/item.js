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
    last_worn_date,
    size,
    brand_name
  } = item;

  console.log("item ----QUERY-----", item)

  // Use the correct number of placeholders in the SQL query and provide all parameters
  const queryString = `
    INSERT INTO item (item_name, category, color, purchase_date, img_src, description, season, closet_id, last_worn_date, size, brand_name)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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
    last_worn_date,
    size,
    brand_name
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => {
      console.log("IS THIS ERROR---", e)
    });
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
    last_worn_date,
    size,
    brand_name
  } = item;

  // Use the correct number of placeholders in the SQL query and provide all parameters
  const queryString = `
    UPDATE item SET item_name = $1, category = $2, color = $3, purchase_date = $4, img_src = $5, description = $6, season = $7, closet_id = $8, last_worn_date = $9, size = $10, brand_name = $11
    WHERE id = $12
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
    last_worn_date,
    size,
    brand_name,
    item.id
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
}

const deleteItem = (id) => {
  return db.query('DELETE FROM item WHERE id = $1',[id]).then((data) => data.rows).catch((e) => console.log(e));
}


module.exports = { getAllItems, getItemById, addItem , deleteItem, updateItem};