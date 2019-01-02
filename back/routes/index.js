/**
 * routes/index.js
 * - Une route est liée à un controller
 * - Le controlleur fait appel au service
 * - Le service fait appel au model
 * - Le model permet d'effectuer toutes les opérations
 *   d'une table dans la base de données.
 */
const controllers = require('../controllers');

app.get('/', controllers.home);

require('./job');
require('./user');
