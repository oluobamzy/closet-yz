const db = require('../../routes/configs/db.config');

const addImage = (item) => {
  const {
    item_name,
    category,
    color,
    purchase_date,
    description,
    season,
    closet_id,
    last_worn_date,
    size,
    brand_name,
    img_src,
  } = item;

  const query = `
    INSERT INTO item (
      "item_name",
      "category",
      "color",
      "purchase_date",
      "description",
      "season",
      "closet_id",
      "last_worn_date",
      "size",
      "brand_name",
      "img_src"
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *
  `;

  const values = [
    item_name,
    category,
    color,
    purchase_date,
    description,
    season,
    closet_id,
    last_worn_date,
    size,
    brand_name,
    img_src,
  ];

  return db
    .query(query, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error(error);
      throw new Error('An error occurred while inserting data.');
    });
};

module.exports = {addImage};
