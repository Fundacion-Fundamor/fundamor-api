
const animal = require("../models").animal;
const { Op } = require("sequelize");
var Sequelize = require('sequelize');
exports.countAnimals = async (req, res) => {
    console.log(req.query);

    try {

        let searchResult = 0;
        let orSentence = [];
        let andSentence = [];
        if (req.query) {

            if (req.query.adopted === "false") {

                orSentence.push({ estado: "Sin adoptar" },
                    { estado: "En proceso" })


            } else if (req.query.adopted === "true") {

                orSentence.push({ estado: "Adoptado" })
            }


            //discrimina (el primero y este NO se deben combinar)
            if (req.query.state) {

                andSentence.push({ estado: req.query.state })

            }

            //discrimina
            if (req.query.specie) {
                if (req.query.specie === "perro") {
                    andSentence.push({ especie: "perro" })
                } else if (req.query.specie === "gato") {
                    andSentence.push({ especie: "gato" })
                }
            }

            //discrimina
            if (req.query.gender) {
                if (req.query.gender === "macho") {
                    andSentence.push({ sexo: "macho" })
                } else if (req.query.gender === "hembra") {
                    andSentence.push({ sexo: "hembra" })
                }
            }


        }

        if (orSentence.length !== 0 && andSentence !== 0) {
            searchResult = await animal.count({

                where: {
                    id_fundacion: req.userSession.id_fundacion,
                    [Op.or]: orSentence,
                    [Op.and]: andSentence

                }
            });
        } else if (orSentence.length !== 0) {
            searchResult = await animal.count({

                where: {
                    id_fundacion: req.userSession.id_fundacion,
                    [Op.or]: orSentence,


                }
            });
        } else if (andSentence.length !== 0) {
            searchResult = await animal.count({

                where: {
                    id_fundacion: req.userSession.id_fundacion,

                    [Op.and]: andSentence

                }
            });
        } else {
            searchResult = await animal.count({

                where: {
                    id_fundacion: req.userSession.id_fundacion,
                }
            });
        }


        res.status(200).json({
            state: true,
            message: "Resultados obtenidos",
            data: searchResult
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            state: false,
            message: "Ha ocurrido un error al obtener la lista de animales"
        });
    }

}


exports.rescuedAnimals = async (req, res) => {
    console.log(req.query);

    try {

        let searchResult = 0;
        let andSentence = [];

        if (req.query) {


            //discrimina
            if (req.query.specie) {
                if (req.query.specie === "perro") {
                    andSentence.push({ especie: "perro" })
                } else if (req.query.specie === "gato") {
                    andSentence.push({ especie: "gato" })
                }
            }

            //discrimina
            if (req.query.gender) {
                if (req.query.gender === "macho") {
                    andSentence.push({ sexo: "macho" })
                } else if (req.query.gender === "hembra") {
                    andSentence.push({ sexo: "hembra" })
                }
            }


        }

        if (andSentence.length !== 0) {
            console.log("lleaaaa1", andSentence)
            searchResult = await animal.findAll({

                where: {
                    id_fundacion: req.userSession.id_fundacion,
                    [Op.and]: andSentence

                }
            });
        } else {
            console.log("lleaaaa")
            searchResult = await animal.findAll({
                attributes: [
                    [Sequelize.literal(`COUNT(*)`), 'rescued_animals'],
                    [Sequelize.fn('DATE', Sequelize.col('fecha_rescate')), 'rescue_month']
                ],
                where: {
                    id_fundacion: req.userSession.id_fundacion,
                    fecha_rescate: {

                        [Op.lt]:new Date("12-31-2021"),
                        [Op.gt]:new Date("01-01-2021")
                    }

                },
                // group: [Sequelize.fn('date_trunc', 'YEAR', Sequelize.col('fecha_rescate'))]
                group: [Sequelize.fn('DATE', Sequelize.col('fecha_rescate')), 'rescue_month']

                // group:["YEAR(date)"]
            });
        }


        res.status(200).json({
            state: true,
            message: "Resultados obtenidos",
            data: searchResult
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            state: false,
            message: "Ha ocurrido un error al obtener la lista de animales"
        });
    }

}

exports.adoptions = async (req, res) => {
}