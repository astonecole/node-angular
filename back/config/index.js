const fs = require('fs');
const path = require('path');
const merge = require('merge');

let global = {},
    config = null;

function loadFile(filename) {
    const file = path.join(__dirname, filename) + '.json';

    if (!fs.existsSync(file)) {
        throw new Error(`${file} does not exists`);
    }
    return require(file);
};

/**
 * app.get('env') === NODE_ENV
 */
exports.load = () => {
    if (config === null) {
        const env = process.env.NODE_ENV || 'production';

        global = loadFile('global');
        config = loadFile(env);
        config = merge.recursive(false, global, config);
    }
    return config;
};
