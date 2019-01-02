const http = require('http');

/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
 */
const defaultOptions = {
    // https://developer.mozilla.org/fr/docs/Web/HTTP/CORS#Access-Control-Allow-Origin
    origin: '*',

    // https://developer.mozilla.org/fr/docs/Glossaire/requete_pre-verification
    credentials: 'false'
};

/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTTP/CORS#Access-Control-Allow-Headers
 */
const headers = [
    'Accept',
    'Accept-Encoding',
    'Accept-Language',
    'Authorization',
    'Cache-Control',
    'Client-Security-Token',
    'Content-Language',
    'Content-Type',
    'Origin',
    'Pragma',
    'X-Requested-With',
];

module.exports = options => {
    const opts = Object.assign(defaultOptions, options);

    return (req, res, next) => {
        //console.log(req.headers.host);

        res.header('Accept', 'application/json');
        res.header('Access-Control-Allow-Origin', opts.origin);
        res.header('Access-Control-Max-Age', 60); // 86400
        res.header('Access-Control-Allow-Credentials', opts.credentials);
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE');
        res.header('Access-Control-Allow-Headers', headers.join(','));
        res.header('Vary', 'Origin');

        const method = req.method && req.method.toUpperCase();

        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        if (method === 'OPTIONS') {
            res.statusCode = 204; // No Content
            res.setHeader('Content-Length', '0');
            res.end();
        } else {
            // Preflight continue.
            next();
        }
    }
};