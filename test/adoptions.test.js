/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTA1MzQ4LCJleHAiOjE2NDI5MDg5NDh9.kruen-4ZiRajblM88RfXWiTeDwJ7z54HNGi6aq3zvoU";

let adoptionId = 41;
let adopterId = "100490344942";//id asociado 
let animalId = 36;

//en caso de que no esté autenticado
//en caso de que el adoptante no exista y se le quiera asociar una adopcion
//eliminar una adopcion que no existe

describe("Pruebas sobre adopción (CASOS IDEALES)", () => {
	it("Se obtienen los datos de una adopción", (done) => {
		chai.request(url)
			.get(`/adoptions/${adoptionId}`)
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body.data).to.have.property("id_adopcion").to.be.equal(41);
				expect(res).to.have.status(200);
				done();
			});

	});

	it("Se obtiene la lista de adopcipnes", (done) => {
		chai.request(url)
			.get("/adoptions")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});

	});

	it("Se obtienen las preguntas asociadas a una adopción", (done) => {
		chai.request(url)
			.get(`/adoptionQuestions/${adoptionId}`)
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});

	});

	// it("Se crea una nueva adopción, asociando adoptante", (done) => {
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

	// it("Se crea una nueva adopción, creando adoptante", (done) => {
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

	it("Se actualizan los datos de una adopción", (done) => {
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

	// it("Se elimina un proceso de adopción", (done) => {
	// 	chai.request(url)
	// 		.delete("/adoptions/57")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.end(function (err, res) {

	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});

	// });

	it("Se registra un seguimiento", (done) => {
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

	it("Se obtiene la lista de seguimientos de una adopción", (done) => {
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
	it("No se obtienen los datos de una adopción inexistente", (done) => {
		chai.request(url)
			.get(`/adoptions/${999}`)
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});

	});



	it("No se obtienen las preguntas asociadas a una adopción inexistente", (done) => {
		chai.request(url)
			.get("/adoptionQuestions/21981238")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);

				done();
			});

	});

	it("No se crea una nueva adopción si el adoptante seleccionado no existe", (done) => {
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
	it("No se crea una nueva adopción, creando adoptante ya registrado", (done) => {
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


	it("No se crea una nueva adopción si el animal ya se encuentra en un proceso sin concluir", (done) => {
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

	it("No se actualizan los datos de una adopción inexistente", (done) => {
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


	it("No se registra un seguimiento si el proceso de adopción no está finalizado", (done) => {
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

	it("No se obtiene la lista de seguimientos de una adopción inexistente", (done) => {
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