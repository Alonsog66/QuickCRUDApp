const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('name', 'Alonso');
  next();
};
cookieController.verifyUser = (req, res, next) => {
  const { name } = req.cookies;
  // if (name === req.body.name)
  next();
  //else next({});
};

module.exports = cookieController;
