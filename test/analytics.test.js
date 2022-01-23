/* eslint-disable camelcase */
/* eslint-disable no-undef */
// /* eslint-disable quotes */

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:4000/api";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjEwMDEiLCJpZF9mdW5kYWNpb24iOjIsInJvbCI6ImFkbWluaXN0cmFkb3IifSwiaWF0IjoxNjQyOTc2MDUxLCJleHAiOjE2NDI5Nzk2NTF9.uZgeBk00r_5A6-4E6xp2xN7ExffDKlkrRpBHZbn1wJ8";



describe("Pruebas sobre datos estadisticos (CASOS IDEALES)", () => {
	it("Debería obtener el numero de animales registrados en el sistema", (done) => {
		chai.request(url)
			.get("/analytics/countAnimals")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(true);
				expect(res).to.have.status(200);
				done();
			});
	});


	it("Debería obtener el numero de animales rescatados este año, clasificados por especie", (done) => {
		chai.request(url)
			.get("/analytics/rescuedAnimals")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(true);
				expect(res).to.have.status(200);
				done();
			});
	});
	
	it("Debería obtener el numero de animales dados en adopción este año, clasificados por especie", (done) => {
		chai.request(url)
			.get("/analytics/adoptedAnimals")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(true);
				expect(res).to.have.status(200);
				done();
			});
	});

	it("Debería obtener el numero de animales esterilizados por la fundación, clasificados por especie", (done) => {
		chai.request(url)
			.get("/analytics/sterilized")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(true);
				expect(res).to.have.status(200);
				done();
			});
	});

	
	it("Debería obtener el numero de animales desparasitados por la fundación", (done) => {
		chai.request(url)
			.get("/analytics/dewormed")
			.set({ "x-auth-token": `${token}` })
			.end(function (err, res) {

				expect(res.body).to.have.property("state").to.be.equal(true);
				expect(res).to.have.status(200);
				done();
			});
	});
});


