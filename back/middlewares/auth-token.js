/**
 * app.use(authToken('abcd'));
 * http://localhost:3000/?token=abcd
 */
module.exports = (pass) => {
    return (req, res, next) => {
        const token = req.query.token;

        if (token !== pass) {
            res.json({ error: 'deggage' });
        } else {
            next();
        }
    };
};