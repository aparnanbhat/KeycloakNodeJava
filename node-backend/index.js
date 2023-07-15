const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Router = require("./routes/index.js");
const session = require('express-session');
const Keycloak = require('keycloak-connect');

const app = express();
const { listProduct, addProduct, editProduct, deleteProduct } = require("./controller/product.js");

const keycloak = require('./keycloak-config.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);

/*const keycloak = new Keycloak({
    realm: 'xpressbees',
    serverUrl: 'https://stage-auth.xbees.in',
    clientId: 'billing-ui',
  });
*/
app.use(keycloak.middleware());

//app.get('/product', listProduct)
app.use((req, res, next) => {
  if (!req.kauth.grant) {
    res.status(401).json({ error: 'Unauthorized' });
  } else {
    next();
  }
});

  app.get('/product', keycloak.protect(), listProduct, (req, res) => {
    console.log("in")
    /*try {
      const accessToken = req.kauth.grant.access_token;
      console.log("test",accessToken)
      // Make the API request with the token in the Authorization header
      const response =  axios.get('https://localhost:5000', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      // Process the API response
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }*/
  });
  //keycloak.redirectUri = 'http://localhost:8082/product';

const port = 8082;

app.listen(port, () => {
  console.log(`Server running at http://localhost:8082`);
});

