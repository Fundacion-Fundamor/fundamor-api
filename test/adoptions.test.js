/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTA5NDg5LCJleHAiOjE2NDI5MTMwODl9.94hK_S-QgkDg17qgeYLnMcB1NsfxLe6YM2ICTq2GMBQ";

let adoptionId = 41;
let adopterId = "100490344942";//id asociado 
let animalId = 36;


describe("Pruebas sobre adopción (CASOS IDEALES)", () => {
	it("Debería obtener los datos de una adopción", (done) => {
		chai.request(url)
			.get(`/adoptions/${adoptionId}`)
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body.data).to.have.property("id_adopcion").to.be.equal(41);
				expect(res).to.have.status(200);
				done();
			});

	});

	it("Debería obtener la lista de adopciones", (done) => {
		chai.request(url)
			.get("/adoptions")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});

	});

	it("Debería obtener las preguntas asociadas a una adopción", (done) => {
		chai.request(url)
			.get(`/adoptionQuestions/${adoptionId}`)
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});

	});

	// it("Debería crear una nueva adopción (asociando adoptante)", (done) => {
	// 	chai.request(url)
	// 		.post("/adoptions")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.send({
	// 			adoptionData: {
	// 				id_animal: animalId,
	// 				estado: "en proceso",
	// 				observaciones: "A la espera de visita domiciliaria",
	// 				fecha_entrega: null

	// 			}, adopterData: { id_adoptante: adopterId, selected: true }, questionsData: []
	// 		})
	// 		.end(function (err, res) {
	// 			expect(res).to.have.status(201);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});

	// });

	// it("Debería crear una nueva adopción (creando adoptante)", (done) => {
	// 	chai.request(url)
	// 		.post("/adoptions")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.send({
	// 			adoptionData: {
	// 				id_animal: 64,
	// 				estado: "en proceso",
	// 				observaciones: "A la espera de visita domiciliaria",
	// 				fecha_entrega: null

	// 			}, adopterData: {
	// 				id_adoptante: "2038464537",
	// 				correo: "adopterTester@fundamor.com",
	// 				nombre: "adopterTest",
	// 				telefono_casa: "312727284",
	// 				telefono_celular: "735467",
	// 				ocupacion: "Ingeniero",
	// 				ciudad: "Armenia"
	// 			}, questionsData: []
	// 		}).end(function (err, res) {

	// 			expect(res).to.have.status(201);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});

	// });

	it("Debería actualizar los datos de una adopción", (done) => {
		chai.request(url)
			.put("/adoptions")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_adopcion: 46,
				estado: "En proceso",
				observaciones: "Observaciones de prueba"

			}).end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});

	});

	// it("Debería eliminar un proceso de adopción", (done) => {
	// 	chai.request(url)
	// 		.delete("/adoptions/57")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.end(function (err, res) {

	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});

	// });

	it("Debería crear un seguimiento", (done) => {
		chai.request(url)
			.post("/tracking")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_adopcion: 47,
				anotaciones: "anotacion de prueba"
			})
			.end(function (err, res) {
				expect(res).to.have.status(201);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});

	});

	it("Debería obtener la lista de seguimientos de una adopción", (done) => {
		chai.request(url)
			.get("/tracking")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_adopcion: 47
			})
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});

	});
});

describe("Pruebas sobre adopción (CASOS ERRONEOS)", () => {
	it("No debería obtener los datos de una adopción inexistente", (done) => {
		chai.request(url)
			.get(`/adoptions/${999}`)
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});

	});



	it("No debería obtener las preguntas asociadas a una adopción inexistente", (done) => {
		chai.request(url)
			.get("/adoptionQuestions/21981238")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);

				done();
			});

	});

	it("No debería crear una nueva adopción cuando el adoptante seleccionado no exista", (done) => {
		chai.request(url)
			.post("/adoptions")
			.set({ "x-auth-token": `${token}` })
			.send({
				adoptionData: {
					id_animal: animalId,
					estado: "en proceso",
					observaciones: "A la espera de visita domiciliaria",
					fecha_entrega: null

				}, adopterData: { id_adoptante: "293494839sss", selected: true }, questionsData: []
			})
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);

				done();
			});

	});
	it("No debería crear una nueva adopción, creando adoptante ya registrado", (done) => {
		chai.request(url)
			.post("/adoptions")
			.set({ "x-auth-token": `${token}` })
			.send({
				adoptionData: {
					id_animal: 64,
					estado: "en proceso",
					observaciones: "A la espera de visita domiciliaria",
					fecha_entrega: null

				}, adopterData: {
					id_adoptante: "100490344942",
					correo: "adopterTester@fundamor.com",
					nombre: "adopterTest",
					telefono_casa: "312727284",
					telefono_celular: "735467",
					ocupacion: "Ingeniero",
					ciudad: "Armenia"
				}, questionsData: []
			}).end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);

				done();
			});

	});


	it("No debería crear una nueva adopción cuando el animal ya se encuentra en un proceso sin concluir", (done) => {
		chai.request(url)
			.post("/adoptions")
			.set({ "x-auth-token": `${token}` })
			.send({
				adoptionData: {
					id_animal: animalId,
					estado: "en proceso",
					observaciones: "A la espera de visita domiciliaria",
					fecha_entrega: null

				}, adopterData: { id_adoptante: adopterId, selected: true }, questionsData: []
			})
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);

				done();
			});

	});

	it("No debería actualizar los datos de una adopción inexistente", (done) => {
		chai.request(url)
			.put("/adoptions")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_adopcion: "9209",
				estado: "En proceso",
				observaciones: "Observaciones de prueba"

			}).end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);

				done();
			});

	});


	it("No debería registrar un seguimiento si el proceso de adopción no está finalizado", (done) => {
		chai.request(url)
			.post("/tracking")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_adopcion: 45,
				anotaciones: "anotacion de prueba"
			})
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);
				done();
			});
	});

	it("No debería obtener la lista de seguimientos de una adopción inexistente", (done) => {
		chai.request(url)
			.get("/tracking")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_adopcion: 238217328372
			})
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);
				done();
			});

	});
});