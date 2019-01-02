/**
 * Job model.
 */
module.exports = sequelize.define('job', {
    title: {
        type: Sequelize.STRING,
        field: 'title',
        allowNull: false
    },
    company: {
        type: Sequelize.STRING,
        field: 'company'
    },
    city: {
        type: Sequelize.STRING,
        field: 'city'
    },
    zipcode: {
        type: Sequelize.STRING,
        field: 'zipcode'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    contractType: {
        type: Sequelize.STRING,
        field: 'contract_type'
    },
    startDate: {
        type: Sequelize.DATE,
        field: 'start_date'
    },
    publishedDate: {
        type: Sequelize.DATE,
        field: 'published_date'
    }
});
