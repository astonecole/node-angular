const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const pem = require('pem');
const conf = require('./config').load();

gulp.task('gencert', done => {
    const dir = path.join(__dirname, 'data', 'ssl');
    fs.mkdirSync(dir, {recursive: true});

    pem.createCertificate(conf.security.pem, (err, keys) => {
        if (err) {
            throw err;
        }
        fs.writeFile(path.join(dir, 'api.cert'), keys.certificate, err => {
            if (err) {
                throw err;
            }
        });
        fs.writeFile(path.join(dir, 'api.key'), keys.clientKey, err => {
            if (err) {
                throw err;
            }
        });
        done();
    });
});

gulp.task('default', gulp.series(['gencert']));