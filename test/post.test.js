/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTYzMDkyLCJleHAiOjE2NDI5NjY2OTJ9.qx1_2c0NpxZO9B8gW5nZKdVwm0Nk6DCG5jpDr-CdMWY";



describe("Pruebas sobre publicación (CASOS IDEALES)", () => {
	it("Debería obtener los datos de una publicación", (done) => {
		chai.request(url)
			.get("/post/1")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body.data).to.have.property("id_publicacion").to.be.equal(1);
				expect(res).to.have.status(200);
				done();
			});
	});

	it("Debería obtener la lista de publicaciones", (done) => {
		chai.request(url)
			.get("/post")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});
	});

	it("Debería insertar una nueva publicación", (done) => {
		chai.request(url)
			.post("/post")
			.set({ "x-auth-token": `${token}` })
			.send({
				titulo: "Publicación test",
				cuerpo: "Aqui va el cuerpo de la publicación"
			})
			.end(function (err, res) {
				expect(res).to.have.status(201);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});
	});

	it("Debería actualizar los datos de una publicación", (done) => {
		chai.request(url)
			.put("/post")
			.set({ "x-auth-token": `${token}` })
			.send({
				id_publicacion:2,
				titulo: "Test de actualizacion",
				cuerpo:"cuerpo actualziado"

			}).end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});
	});

	// it("Debería eliminar una publicación", (done) => {
	// 	chai.request(url)
	// 		.delete("/post/11")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.end(function (err, res) {

	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});
	// });
});


describe("Pruebas sobre publicación (CASOS ERONEOS)", () => {
	it("No debería obtener los datos de una publicación inexistente", (done) => {
		chai.request(url)
			.get("/post/899798")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});
	});



	it("No debería insertar una publicación si faltan datos obligatorios", (done) => {
		chai.request(url)
			.post("/post")
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