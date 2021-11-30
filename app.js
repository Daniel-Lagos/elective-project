const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', require('./routes/login'));

app.listen(app.get('port'), ()=> {
  console.log(`Server is listen in port ${app.get('port')}`);
});
