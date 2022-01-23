/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTcxMTYyLCJleHAiOjE2NDI5NzQ3NjJ9.u4itLg2Y9xvQZxI-fW3aTgb6hU_RoQlyfh1Baw4-QSw";



describe("Pruebas sobre colaboradores (CASOS IDEALES)", () => {
	it("Debería obtener los datos de un colaborador", (done) => {
		chai.request(url)
			.get("/employees/1001")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body.data).to.have.property("id_empleado").to.be.equal("1001");
				expect(res).to.have.status(200);
				done();
			});
	});

	it("Debería obtener la lista de empleados", (done) => {
		chai.request(url)
			.get("/employees")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);
				done();
			});
	});

	// it("Debería insertar un empleado", (done) => {
	// 	chai.request(url)
	// 		.post("/employees")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.send({
	// 			correo: "testerman2@fundamor.com",
	// 			contrasenia: "12345678",
	// 			nombre: "Testerman ocoró",
	// 			rol: "administrador",
	// 			id_empleado: "10206095537"
	// 		})
	// 		.end(function (err, res) {
	// 			expect(res).to.have.status(201);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});
	// });



	it("Debería actualizar los datos de un empleado", (done) => {
		chai.request(url)
			.put("/employees")
			.set({ "x-auth-token": `${token}` })
			.send({
				nombre: "Luz marina Ramirez gomez",
				correo: "luzmari0987@gmail.com",
				telefono_celular: "3128904567",
				id_empleado: "1001"

			}).end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(true);

				done();
			});
	});

	// it("Debería eliminar un empleado", (done) => {
	// 	chai.request(url)
	// 		.delete("/employees/10011")
	// 		.set({ "x-auth-token": `${token}` })
	// 		.end(function (err, res) {

	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.have.property("state").to.be.equal(true);

	// 			done();
	// 		});
	// });
});


describe("Pruebas sobre empleados (CASOS ERONEOS)", () => {
	it("No debería obtener los datos de un empleado inexistente", (done) => {
		chai.request(url)
			.get("/employees/899798")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {
				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});
	});

	it("No debería insertar un empleado si ya existe su identificación o su correo", (done) => {
		chai.request(url)
			.post("/employees")
			.set({ "x-auth-token": `${token}` })
			.send({
				correo: "testerman2@fundamor.com",
				contrasenia: "12345678",
				nombre: "Testerman ocoró",
				rol: "administrador",
				id_empleado: "10206095537"
			})
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);

				done();
			});
	});

	it("No debería actualizar una adoptante si existe alguien mas con ese correo", (done) => {
		chai.request(url)
			.put("/employees")
			.set({ "x-auth-token": `${token}` })
			.send({
				correo: "testerman@fundamor.com",
				contrasenia: "12345678",
				nombre: "Testerman ocoró",
				rol: "administrador",
				id_empleado: "10206095537"
			})
			.end(function (err, res) {

				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);
				done();
			});
	});

	it("No debería actualizar una adoptante si faltan datos obligatorios", (done) => {
		chai.request(url)
			.put("/employees")
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