const express = require("express");
const mongdb = require("./db");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = 5000;
mongdb();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://6459452f9ce1521519a16ae1--glowing-granita-8039cd.netlify.app/");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreatUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

//Swagger initialization
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Beans Bar Cafe",
      description: "Authentication using jwt",
      servers: [`http://localhost:${port}`],
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Swagger definition

/**
 * @swagger
 * /api/creatuser:
 *  post:
 *    tags:
 *      - Authentication
 *    summary: create user
 *    parameters:
 *      - in: body
 *        name: body
 *        description: create user
 *        required: true
 *        example: {"name": "Anshul","email": "ffhzzf@gmail.com","password": "1232245678","location": "creden"}
 *    responses:
 *      '200':
 *        description: Success
 *      '203':
 *        description: failure
 */

/**
 * @swagger
 * /api/loginuser:   
 *  post:
 *    tags:
 *      - Authentication
 *    summary: login user
 *    parameters:
 *      - in: body
 *        name: body
 *        description: login user
 *        required: true
 *        example: {"email": "ffhzzf@gmail.com","password": "1232245678"}
 *    responses:
 *      '200':
 *        description: Success
 *      '203':
 *        description: failure
 */

/**
 * @swagger
 * /api/foodData:
 *  get:
 *    tags:
 *      - Authentication
 *    summary: Login user
 *    responses:
 *      '200':
 *        description: Success
 *      '203':
 *        description: failure
 */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// https://olive-caridea-suit.cyclic.app/api-docs/
// https://6459452f9ce1521519a16ae1--glowing-granita-8039cd.netlify.app/
