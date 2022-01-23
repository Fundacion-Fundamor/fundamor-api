/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTc2MDUxLCJleHAiOjE2NDI5Nzk2NTF9.uZgeBk00r_5A6-4E6xp2xN7ExffDKlkrRpBHZbn1wJ8";



describe("Pruebas sobre preguntas de adopción (CASOS IDEALES)", () => {
	it("Debería obtener los datos de una pregunta", (done) => {
		chai.request(url)
			.get("/questions/35")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body.data).to.have.property("id_pregunta").to.be.equal(35);
				expect(res).to.have.status(200);
				done();
			});
	});

	it("Debería obtener la lista de preguntas", (done) => {
		chai.request(url)
			.get("/questions")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});
	});

	it("Debería insertar una nueva pregunta", (done) => {
		chai.request(url)
			.post("/questions")
			.set({ "x-auth-token": `${token}` })
			.send({
				titulo: "Publicación test",
				tipo_pregunta: "abierta"
			})
			.end(function (err, res) {
				expect(res).to.have.status(201);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});
	});

	it("Debería actualizar los datos de una pregunta", (done) => {
		chai.request(url)
			.put("/questions")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_pregunta: 72,
				titulo: "Test de actualizacion",
				tipo_pregunta: "abierta"

			}).end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});
	});

	// it("Debería eliminar una pregunta y sus opciones de respuesta si las tiene", (done) => {
	// 	chai.request(url)
	// 		.delete("/questions/73")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.end(function (err, res) {

	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});
	// });
});


describe("Pruebas sobre preguntas de adopción (CASOS ERONEOS)", () => {
	it("No debería obtener los datos de una pregunta inexistente", (done) => {
		chai.request(url)
			.get("/questions/899798")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});
	});



	it("No debería insertar una pregunta si faltan datos obligatorios", (done) => {
		chai.request(url)
			.post("/questions")
			.set({ "x-auth-token": `${token}` })
			.send({
				titulo: "2021-08-10"
			})
			.end(function (err, res) {

				expect(res).to.have.status(422);
				done();
			});
	});

	it("No debería actualizar una pregunta si faltan datos obligatorios", (done) => {
		chai.request(url)
			.put("/questions")
			.set({ "x-auth-token": `${token}` })
			.send({
				titulo: "2021-08-10"
			})
			.end(function (err, res) {

				expect(res).to.have.status(422);
				done();
			});
	});
});