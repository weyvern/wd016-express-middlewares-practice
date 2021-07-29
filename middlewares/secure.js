const secure = (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    next();
  } else {
    res.status(403).json({ error: 'You shall not pass' });
  }
};

module.exports = secure;
