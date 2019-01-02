const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');
const cors = require('./middlewares/cors');
const jwtCheck = require('./middlewares/jwt-check');
const cookieParser = require('cookie-parser');
const https = require('https');
const pem = require('pem');
const fs = require('fs');

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:4200'
};

// Création de l'application.
app = express();
api = express.Router();
app.use('/api', api);

// Chargement de la configuration.
conf = config.load();

// Connection à la base de donées.
Sequelize = require('sequelize');
sequelize = new Sequelize(conf.db.default.url, {
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created.');
    });

// App
app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Api
api.use(cors(corsOptions));
api.use(cookieParser());
api.use(jwtCheck);
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// Configuration du moteur de template Pug.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = false;

/**
 * Démarrage du serveur.
 * 
 * @see https://www.npmjs.com/package/pem#express
 */
pem.createCertificate({ days: 5, selfSigned: true }, (err, keys) => {
    // Chargement des routes.
    require(path.join(__dirname, 'routes'));

    https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app)
        .listen(conf.server.port);

    fs.writeFileSync(path.join('data', 'ssl', 'jobs.cert'), keys.certificate, 'utf8');
    fs.writeFileSync(path.join('data', 'ssl', 'jobs.key'), keys.clientKey, 'utf8');
});
