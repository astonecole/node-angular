const JobService = require('../services/JobService');

exports.find = (req, res) => {
    JobService.findById(req.params.id)
        .then(
            data => {
                res.json(data);
            },
            err => {
                res.status(500).json(err);
            }
        );
};

exports.all = (req, res) => {
    console.log(req.payload || '');

    JobService.findAll().then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err);
        }
    );
};

exports.create = (req, res) => {
    JobService.create(req.body)
        .then(
            data => {
                res.status(201).json(data);
            },
            err => {
                res.status(500).json(err);
            }
        );

};

exports.update = (req, res) => {
    JobService.update(req.body)
        .then(
            data => {
                res.status(204).json();
            },
            err => {
                res.status(500).json(err);
            }
        );
};

exports.delete = (req, res) => {
    JobService.delete(req.params.id)
        .then(
            data => {
                res.status(204).json();
            },
            err => {
                res.status(500).json(err);
            }
        );
};
