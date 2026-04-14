const axios = require("axios");

const SWAGGER_URL = "https://petstore.swagger.io/v2/swagger.json";

async function getEndpoints() {
  try {
    const response = await axios.get(SWAGGER_URL);
    const paths = response.data.paths;

    console.log("Available Endpoints:\n");

    Object.keys(paths).forEach(path => {
      console.log(path);
    });

  } catch (error) {
    console.error("Error fetching Swagger:", error.message);
  }
}

getEndpoints();