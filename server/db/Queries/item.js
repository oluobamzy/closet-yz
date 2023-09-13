const db = require("../../routes/configs/db.config");
const getAllItems = (userId) => {
  return db
    .query(
      `SELECT item.*
    FROM item
    JOIN closet ON item.closet_id = closet.id
    JOIN users ON closet.users_id = users.id
    WHERE users.id = $1
    AND item.delete = false`,
      [userId]
    )
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

const getItemById = (id) => {
  return db
    .query("SELECT * FROM item WHERE id = $1", [id])
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

const addItem = (item) => {
  // Pass the 'item' object as a parameter
  const {
    item_name,
    category,
    subcategory,
    color,
    purchase_date,
    img_src,
    description,
    season,
    closet_id,
    last_worn_date,
    size,
    brand_name,
  } = item;

  console.log("item ----QUERY-----", item);

  // Use the correct number of placeholders in the SQL query and provide all parameters
  const queryString = `
    INSERT INTO item (item_name, category, subcategory, color, purchase_date, img_src, description, season, closet_id, last_worn_date, size, brand_name)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING *;`; // Assuming you want to return the inserted item

  const values = [
    item_name,
    category,
    subcategory,
    color,
    purchase_date,
    img_src,
    description,
    season,
    closet_id,
    last_worn_date,
    size,
    brand_name,
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => {
      console.log("IS THIS ERROR---", e);
    });
};
const updateItem = (requestData) => {
  const {
    brand_name,
    category,
    color,
    last_worn_date,
    purchase_date,
    season,
    size,
    itemId,
  } = requestData.formData;

  const itemIdValue = requestData.itemId;
  console.log("QUERYformData-------------------", requestData.formData);
  console.log("QUERYitemIdValue-------------------", itemIdValue);

  // Use the correct number of placeholders in the SQL query and provide all parameters
  const queryString = `
    UPDATE item
    SET brand_name = $1, category = $2, color = $3, last_worn_date = $4, purchase_date = $5, season = $6, size = $7
    WHERE id = $8
    RETURNING *;`;

  const values = [
    brand_name,
    category,
    color,
    last_worn_date,
    purchase_date,
    season,
    size,
    itemIdValue,
  ];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

const deleteItem = (id) => {
  return db
    .query("DELETE FROM item WHERE id = $1", [id])
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

const getItemsForToday = (userId) => {
  return db
    .query(
      `SELECT item.*
FROM item
JOIN closet ON item.closet_id = closet.id
JOIN users ON closet.users_id = users.id
WHERE users.id = $1 AND DATE(item.expired_timeStamp) = CURRENT_DATE;`,
      [userId]
    )
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

const updateItemDelete = (itemId) => {
  const queryString = `
    UPDATE item SET delete = true
    WHERE id = $1
    RETURNING *;`;

  const values = [itemId];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

const selectItemsToDelete = (userId) => {
  const queryString = `
    SELECT * FROM item
    JOIN closet ON item.closet_id = closet.id
    JOIN users ON closet.users_id = users.id
    WHERE users.id = $1 AND delete = true;`;

  const values = [userId];

  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

const setItemsForToday = (itemId) => {
  // Get the current timestamp
  const currentTimestamp = new Date();

  return db
    .query(
      `UPDATE item
       SET expired_timeStamp = $1, use_count = use_count + 1
       WHERE id = $2`,
      [currentTimestamp, itemId]
    )
    .then(() => {
      // Optionally, you can return the updated item if needed
      return db
        .query(`SELECT * FROM item WHERE id = $1`, [itemId])
        .then((data) => data.rows[0]);
    })
    .catch((e) => console.log(e));
};
const removeItemsForToday = (itemId) => {
  // Get the current timestamp
  const currentTimestamp = new Date();

  // Subtract 1 day from the current timestamp
  currentTimestamp.setDate(currentTimestamp.getDate() - 1);

  return db
    .query(
      `UPDATE item
       SET expired_timeStamp = $1, use_count = use_count - 1
       WHERE id = $2`,
      [currentTimestamp, itemId]
    )
    .then(() => {
      // Optionally, you can return the updated item if needed
      return db
        .query(`SELECT * FROM item WHERE id = $1`, [itemId])
        .then((data) => data.rows[0]);
    })
    .catch((e) => console.log(e));
};

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  deleteItem,
  updateItem,
  getItemsForToday,
  setItemsForToday,
  updateItemDelete,
  selectItemsToDelete,
  removeItemsForToday
};
