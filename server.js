const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const db = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

//adding middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//adding handlebars handler
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//route setup
app.use(routes);

//db sync and server startup

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});