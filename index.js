const express = require("express");
const mongdb = require("./db");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = 5000;
mongdb();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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
      title: "Beens Bar",
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
/*
https://tame-tan-betta-cap.cyclic.app */
