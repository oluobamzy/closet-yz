const db = require('../../routes/configs/db.config');
const loadDashboard = (user_id) => {
  const queryString = `
  SELECT
  i.*,
  c.closet_name,
  b.date_deleted AS bin_deleted_date,
  t.tag_name
FROM
  item i
LEFT JOIN
  closet c ON i.closet_id = c.id
LEFT JOIN
  bin b ON i.id = b.item_id
LEFT JOIN
  tag_item ti ON i.id = ti.item_id
LEFT JOIN
  tag t ON ti.tag_id = t.id
WHERE
  i.user_id = $1;

  `;
  const values = [user_id];
  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

module.exports = { loadDashboard };