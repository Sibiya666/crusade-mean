module.exports = (res, error) => {
  res.status(500).json({
    succes: false,
    msg: error.message ? error.message : error,
  });
};
