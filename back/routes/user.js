const controllers = require('../controllers/user');

/**
 * http://localhost:3000/register
 */
app.post('/register', controllers.register);

/**
 * http://localhost:3000/authentication
 */
app.post('/authentication', controllers.authentication);
