/* eslint-disable indent */
/* eslint-disable camelcase */

const animal = require("../models").animal;

exports.create = async (req, res) => {

    try {
        const result = await animal.create(req.body);
        res.status(200).json({
            state: true,
            message: "Se ha agregado el animal con éxito",
            data: result.id_animal // id assigned
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            state: false,
            message: "Ha ocurrido un error al guardar el animal"

        });
    }

};

exports.delete = (req, res) => {
    res.status(200).json({
        message: "NOT IMPLEMENTED: Animal delete"
    });
};

exports.get = (req, res) => {
    res.status(200).json({
        message: "NOT IMPLEMENTED: Animal get"
    });
};

exports.update = (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: "NOT IMPLEMENTED: Animal update"
    });
};

exports.list = (req, res) => {
    res.status(200).json({
        message: "NOT IMPLEMENTED: Animal list"
    });
};
