// services/JobService.js

const JobModel = require('../models/JobModel');

exports.create = data => {
    return JobModel.sync().then(
        () => {
            return JobModel.create({
                title: data.title,
                company: data.company,
                city: data.city,
                zipcode: data.zipcode,
                description: data.description,
                contractType: data.contractType,
                startDate: new Date(data.startDate),
                publishedDate: new Date()
            })
        }
    );
};

exports.findById = id => JobModel.findByPk(id);
exports.findAll = () => JobModel.findAll();

exports.delete = id => {
    return JobModel.findByPk(id).then(
        data => data.destroy()
    );
};

exports.update = data => {
    return JobModel.update({
        id: data.id,
        title: data.title,
        company: data.company,
        city: data.city,
        zipcode: data.zipcode,
        description: data.description,
        contractType: data.contractType,
        startDate: new Date(data.startDate),
        publishedDate: new Date(data.publishedDate)
    },
        { where: { id: data.id } }
    );
};
