const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');
const cors = require('./middlewares/cors');
const jwtCheck = require('./middlewares/jwt-check');
const cookieParser = require('cookie-parser');
const https = require('https');
const fs = require('fs');

// Création de l'application.
app = express();
api = express.Router();
app.use('/api', api);

// Chargement de la configuration.
conf = config.load();

// Connection à la base de donées.
Sequelize = require('sequelize');
sequelize = new Sequelize(conf.db.default.url, {
    logging: console.log, // console.log | false
    freezeTableName: true,
    operatorsAliases: false,

    // Specify options, which are used when sequelize.define is called.
    define: {
        force: false,
        timestamps: true
    }
});

sequelize
    .authenticate()
    .then(
        () => {
            console.log('Connection has been established successfully.');
        },
        err => {
            console.error('Unable to connect to the database:', err.message);
        }
    );

// App
app.use(cors(conf.security.cors));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Api
api.use(cors(conf.security.cors));
api.use(cookieParser());
api.use(jwtCheck);
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// Configuration du moteur de template Pug.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = false;

require(path.join(__dirname, 'routes'));

const dir = path.join(__dirname, 'data', 'ssl');
const options = {
    key: fs.readFileSync(path.join(dir, 'api.key')),
    cert: fs.readFileSync(path.join(dir, 'api.cert'))
};

https.createServer(options, app).listen(conf.server.port);
