// routes/job.js

const controllers = require('../controllers/job');

/**
 * http://localhost:3000/api/jobs
 */
api.post('/jobs', controllers.create);

/**
 * http://localhost:3000/api/jobs
 */
api.get('/jobs', controllers.all);

/**
 * http://localhost:3000/api/jobs/5
 */
api.get('/jobs/:id', controllers.find);

/**
 * http://localhost:3000/api/jobs/12
 */
api.delete('/jobs/:id', controllers.delete);

/**
 * http://localhost:3000/api/jobs
 */
api.put('/jobs', controllers.update);
