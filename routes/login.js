const { Router } = require('express');
const { getUser, home, hero } = require('../controllers/login');

const router = Router();

router.get('/login',
  [],
  getUser);

router.get('/',
  [],
  home);

router.get('/home',
  [],
  hero);

module.exports = router;
