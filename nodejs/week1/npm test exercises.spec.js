const request = require("supertest");
const app = require("../src/backend/index");

afterEach(async () => {
  app.close();
});

describe("GET /", () => {
  test("returns 'My portfolio' in response", async (done) => {
    const response = await request(app).get("/");
    expect(response.text.includes("My portfolio")).toBeTruthy();
    done();
  });

  test("returns exact text in response", async (done) => {
    const response = await request(app).get("/");
    expect(response.text).toBe(`
    <body>
        <h1>My portfolio</h1>
    </body>
  `);
    done();
  });

  test("should return 200 status code", async (done) => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    done();
  });
});

describe("Test /api/items", function () {
  it("should return 200 status code", function (done) {
    request(app)
      .get("/api/items")
      .end(function (err, response) {
        if (err) {
          return done(err);
        }

        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it("should return an array object of items", function (done) {
    request(app)
      .get("/api/items")
      .end(function (err, response) {
        if (err) {
          return done(err);
        }

        var items = response.body.items;
        expect(Array.isArray(items)).toBeTruthy();
        done();
      });
  });

  it("should return a JSON string of items", function (done) {
    request(app)
      .get("/api/items")
      .expect("Content-Type", /json/)
      //   .expect('Content-Length', '46')
      .end(function (error, response) {
        if (error) {
          return done(error);
        }

        // console.log(response.body);
        // console.log(response.text);

        try {
          JSON.parse(response.text);
          done();
        } catch (error) {
          done(error);
        }
      });
  });
});
