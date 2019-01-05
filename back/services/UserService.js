const UserModel = require('../models/UserModel');
const bcryptPassword = require('../utils/bcrypt-password');

function create(data) {
    return UserModel.sync().then(
        () => {
            return UserModel.create({
                name: data.name,
                email: data.email,
                password: data.password,
                active: true
            });
        }
    );
}

function findByEmail(email) {
    return UserModel.findOne({
        where: { email: email }
    });
}

exports.register = data => {
    return bcryptPassword.hash(data.password).then(
        hash => {
            data.password = hash;
            return create(data);
        }
    );
};

exports.authenticate = data => {
    return findByEmail(data.email).then(
        user => {
            if (!user) {
                throw new Error('user not found');
            }

            return bcryptPassword.verify(data.password, user.password).then(
                isOk => {
                    if (!isOk) {
                        throw new Error('password is invalid');
                    }
                    return user;
                }
            );
        }
    );
}

exports.create = create;
exports.findByEmail = findByEmail;
