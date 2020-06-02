module.exports = function catchError(err, req, res, next) {
  console.log(err);

  return res.status(500).json({ message: err.message, detail: err });
};