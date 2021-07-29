const pool = require('../db/pg');

const verifyUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const { rowCount, rows } = await pool.query(
      `SELECT * FROM users AS u
            JOIN token AS t
            ON u.token = t.id
            WHERE t.value = $1`,
      [token]
    );
    if (!rowCount) throw new Error('User does not exist. Access denied');
    req.user = rows[0];
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = verifyUser;
