const db = require("../../routes/configs/db.config");
const loadDashboard = (user_id) => {
  const queryString = `
  SELECT i.*, c.closet_name
  FROM item AS i
  INNER JOIN closet AS c ON i.closet_id = c.id
  INNER JOIN users AS u ON c.users_id = u.id
  WHERE u.id = $1;
  `;
  const values = [user_id];
  return db
    .query(queryString, values)
    .then((data) => data.rows)
    .catch((e) => console.log(e));
};

module.exports = { loadDashboard };
