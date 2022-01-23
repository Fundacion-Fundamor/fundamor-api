/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTA5NDg5LCJleHAiOjE2NDI5MTMwODl9.94hK_S-QgkDg17qgeYLnMcB1NsfxLe6YM2ICTq2GMBQ";



describe("Pruebas sobre animal (CASOS IDEALES)", () => {
	it("Se obtienen los datos de un animal", (done) => {
		chai.request(url)
			.get("/animals/27")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body.data).to.have.property("id_animal").to.be.equal(27);
				expect(res).to.have.status(200);
				done();
			});

	});

	it("Se obtiene la lista de animales", (done) => {
		chai.request(url)
			.get("/animals")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});

	});

	it("Se inserta un nuevo animal", (done) => {
		chai.request(url)
			.post("/animals")
			.set({ "x-auth-token": `${token}` })
			.send({
				especie: "gato",
				nombre: "Pelusa",
				fecha_nacimiento: "2021-08-10",
				sexo: "macho",
				caracteristicas: "Es muy amigable",
				sitio_rescate: "Barrio llanitos, calarcá",
				fecha_rescate: "2021-10-10",
				color: "Blanco con machas",
				vacunas: "Antirraboca",
				esterilizado: false,
				desparasitado: true,
				tamanio: "pequeño",
				estado: "Sin adoptar"
			})
			.end(function (err, res) {
				expect(res).to.have.status(201);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});

	});

	it("Se actualizan los datos de un animal", (done) => {
		chai.request(url)
			.put("/animals")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_animal: 77,
				especie: "gato",
				nombre: "Pelusa",
				fecha_nacimiento: "2021-08-10",
				sexo: "macho",
				caracteristicas: "Es muy amigable, y jugueton",
				sitio_rescate: "Barrio llanitos, calarcá",
				fecha_rescate: "2021-10-10",
				color: "Blanco con machas",
				vacunas: "Antirraboca",
				esterilizado: false,
				desparasitado: true,
				tamanio: "pequeño",
				estado: "Sin adoptar"

			}).end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});

	});

	// it("Se elimina un animal", (done) => {
	// 	chai.request(url)
	// 		.delete("/adoptions/52")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.end(function (err, res) {

	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});

	// });
});


describe("Pruebas sobre animal (CASOS ERONEOS)", () => {
	it("No se obtienen los datos de un animal inexistente", (done) => {
		chai.request(url)
			.get("/animals/899798")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});

	});



	it("No se inserta un animal si faltan datos obligatorios del mismo ", (done) => {
		chai.request(url)
			.post("/animals")
			.set({ "x-auth-token": `${token}` })
			.send({
				fecha_nacimiento: "2021-08-10",
				sexo: "macho",
				caracteristicas: "Es muy amigable",
				sitio_rescate: "Barrio llanitos, calarcá",
				fecha_rescate: "2021-10-10",
				color: "Blanco con machas",
				vacunas: "Antirraboca",
				esterilizado: false,
				desparasitado: true,
				tamanio: "pequeño",
				estado: "Sin adoptar"
			})
			.end(function (err, res) {
			
				expect(res).to.have.status(422);
				done();
			});

	});

	it("No se actualizan los datos de un animal si alguno de los campos no corresponden con el tipo de dato", (done) => {
		chai.request(url)
			.put("/animals")
			.set({ "x-auth-token": `${token}` })
			.send({
				especie: "gato",
				nombre: "Pelusa",
				fecha_nacimiento: "2021-08-10",
				sexo: "macho",
				caracteristicas: "Es muy amigable, y jugueton",
				sitio_rescate: "Barrio llanitos, calarcá",
				fecha_rescate: "2021-10-10",
				color: "Blanco con machas",
				vacunas: "Antirraboca",
				esterilizado: null,
				desparasitado: true,
				tamanio: "pequeño",
				estado: "Sin adoptar"

			}).end(function (err, res) {

				expect(res).to.have.status(422);

				done();
			});

	});

});