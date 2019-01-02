module.exports = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        field: 'password',
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        field: 'active',
        allowNull: false
    },
});
