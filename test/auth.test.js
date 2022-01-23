/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTcxMTYyLCJleHAiOjE2NDI5NzQ3NjJ9.u4itLg2Y9xvQZxI-fW3aTgb6hU_RoQlyfh1Baw4-QSw";



describe("Pruebas sobre autenticacion (CASOS IDEALES)", () => {
	it("Debería obtener el token de autenticacion", (done) => {
		chai.request(url)
			.post("/auth/token")
			.send({
				correo: "luzmari0987@gmail.com",
				contrasenia: "12345678"
			})
			.end(function (err, res) {
				expect(res.body).to.have.property("state").to.be.equal(true);
				expect(res).to.have.status(200);
				done();
			});
	});


	it("Debería obtener los datos del usuario al que le pertenece un token", (done) => {
		chai.request(url)
			.get("/auth")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(true);
				expect(res).to.have.status(200);
				done();
			});
	});

	// it("Debería permitirle al usuario restablecer su contraseña", (done) => {
	// 	chai.request(url)
	// 		.get("/auth/recoveryPassword")
	// 		.send({
	// 			correo: "luzmari0987@gmail.com"
	// 		})
	// 		.end(function (err, res) {

	// 			expect(res.body).to.have.property("state").to.be.equal(true);
	// 			expect(res).to.have.status(200);
	// 			done();
	// 		});
	// });

});


describe("Pruebas sobre autenticacion (CASOS ERRONEOS)", () => {
	it("No debería obtener el token de autenticacion si la contraseña es incorrecta", (done) => {
		chai.request(url)
			.post("/auth/token")
			.send({
				correo: "luzmari0987@gmail.com",
				contrasenia: "123456wewe78"
			})
			.end(function (err, res) {
				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});
	});


	it("No debería obtener los datos del usuario al que le pertenece un token si el token es inválido o ha expirado", (done) => {
		chai.request(url)
			.get("/auth")
			.set({ "x-auth-token": `${"sdkashdjkhasdkjdhasdksahdkashdkhsakdhkajshdkjasdkhkasj"}` })
			.end(function (err, res) {

				expect(res).to.have.status(401);
				done();
			});
	});

	it("No debería permitirle al usuario restablecer su contraseña, si el correo no existe", (done) => {
		chai.request(url)
			.post("/auth/recoveryPassword")
			.send({
				correo: "luzmar222i0987@gmail.com"
			})
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(false);
				expect(res).to.have.status(200);
				done();
			});
	});


});