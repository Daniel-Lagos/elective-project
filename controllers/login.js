const getUser = async (req, res) => {
   res.render('index', { title: 'Login Section' });
};

const home = async (req, res) => {
  return res.render('home', { title: 'Home Section' });
};

const hero = async (req, res) => {
  return res.render('hero', { title: 'NaturSalud' });
};

module.exports = { getUser, home, hero };
