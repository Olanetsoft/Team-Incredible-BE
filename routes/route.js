const exp = require('express');
const user = require('../controllers/user_controller');

const appRoute = exp.Router();

appRoute.post('/api/v1/login', user.login);
appRoute.post('/api/v1/register', user.create);

//Added this to render login page
appRoute.get('/login', user.renderLogin);

module.exports = appRoute;
