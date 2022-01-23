/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTc2MDUxLCJleHAiOjE2NDI5Nzk2NTF9.uZgeBk00r_5A6-4E6xp2xN7ExffDKlkrRpBHZbn1wJ8";
let adopterId= "100490344942";


describe("Pruebas sobre adoptantes (CASOS IDEALES)", () => {
	it("Debería obtener los datos de un adoptante", (done) => {
		chai.request(url)
			.get("/adopters/"+ adopterId)
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {
				expect(res.body.data).to.have.property("id_adoptante").to.be.equal(adopterId);
				expect(res).to.have.status(200);
				done();
			});
	});

	it("Debería obtener la lista de adoptantes", (done) => {
		chai.request(url)
			.get("/adopters")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});
	});


	it("Debería actualizar los datos de un adoptante", (done) => {
		chai.request(url)
			.put("/adopters")
			.set({ "x-auth-token": `${token}` })
			.send({
				correo: "adopterTest@fundamor.com",
				nombre: "Euclides Jaramillo",
				telefono_casa: null,
				telefono_celular: "3128904567",
				ocupacion: "Carnicero",
				ciudad: "Av ZZZ #45 calarcá",
				id_adoptante: "2038464537"

			}).end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});
	});

	// it("Debería eliminar un adoptante y sus procesos de adopción si los tiene", (done) => {
	// 	chai.request(url)
	// 		.delete("/adopters/231")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.end(function (err, res) {

	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});
	// });
});


describe("Pruebas sobre adoptantes (CASOS ERONEOS)", () => {
	it("No debería obtener los datos de un adoptante inexistente", (done) => {
		chai.request(url)
			.get("/adopters/899798")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {
				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});
	});


	it("No debería actualizar una  adoptante si faltan datos obligatorios", (done) => {
		chai.request(url)
			.put("/questions")
			.set({ "x-auth-token": `${token}` })
			.send({
				nombre: "Juan"
			})
			.end(function (err, res) {

				expect(res).to.have.status(422);
				done();
			});
	});
});