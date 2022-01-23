/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTc2MDUxLCJleHAiOjE2NDI5Nzk2NTF9.uZgeBk00r_5A6-4E6xp2xN7ExffDKlkrRpBHZbn1wJ8";
let employee = {
	"id_empleado": "10011",
	"id_fundacion": 2,
	"correo": "aureliomejiaa2000@malo.com",
	"nombre": "Aurelio mejia",
	"rol": "administrador"
};
let usedMail = "hernan@fundamor.com";


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

	it("No debería insertar un empleado cuando ya exista su identificación o su correo", (done) => {
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

	it("No debería actualizar un empleado cuando exista alguien mas con ese correo", (done) => {
		employee.correo = usedMail;
		chai.request(url)
			.put("/employees")
			.set({ "x-auth-token": `${token}` })
			.send( employee)
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property("state").to.be.equal(false);
				done();
			});
	});

	it("No debería actualizar un empleado cuando falten datos obligatorios", (done) => {
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