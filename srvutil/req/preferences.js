
var themes = [
  "ocean",
  "light",
  "dark"
];

function preferences(req, res, next) {
  req.fluvicast = {};

  // Site theme
  if (req.cookies.theme && themes.includes(req.cookies.theme)) {
    req.fluvicast.theme = req.cookies.theme;
  } else {
    req.fluvicast.theme = themes[0];
  }

  next();
}

module.exports = preferences;
