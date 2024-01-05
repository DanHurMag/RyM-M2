//importar el servidor
const server = require("../src/server")
//importar el supertest
const session = require("supertest")
//configurar el entorno de supertest
const agent = session(server)

describe("Testeando rutas", () => {
	describe("Testeando que GET /rickandmorty/character/:id funciona", () => {
		it("Responde con un status 200 para el character con el id 1", async () => {
			try {
			const result = await agent.get("/rickandmorty/character/1");
			expect(result.satusCode).toBe(200);
			} catch (err){
				console.log(err);
			}
		});
		it("Responde con un objeto con propiedades id, name, origin, gender, status, image, species", async () => {
			try {
				const result = await agent.get("/rickandmorty/character/1")
				expect(body).toHaveProperty("id");
				expect(body).toHaveProperty("name");
				expect(body).toHaveProperty("origin");
				expect(body).toHaveProperty("gender");
				expect(body).toHaveProperty("status");
				expect(body).toHaveProperty("image");
				expect(body).toHaveProperty("species");
			} catch (err){
				throw new Error(err)
			}
		})
	})
	describe("Testeando login", () => {});
	describe("Testeando postFav", () => {});
	describe("Testeando deleteFav", () => {});
});