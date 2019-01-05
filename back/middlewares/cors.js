// https://developer.mozilla.org/fr/docs/Web/HTTP/CORS

const defaults = {
    origin: '*',
    credentials: false
};

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
    const opts = Object.assign(defaults, options);

    return (req, res, next) => {
        res.header('Accept', 'application/json');
        res.header('Access-Control-Allow-Origin', opts.origin);
        res.header('Access-Control-Max-Age', 600); // 10 Minutes
        res.header('Access-Control-Allow-Credentials', opts.credentials);
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE');
        res.header('Access-Control-Allow-Headers', headers.join(','));
        res.header('Vary', 'Origin');

        const method = req.method && req.method.toUpperCase();

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
