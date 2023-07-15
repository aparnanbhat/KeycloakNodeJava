
const { getProduct, insertProduct, updateProduct, deleteProductById } = require("../models/product_model.js");
const Keycloak = require('keycloak-connect');
const express = require("express");
const app = express();
const keycloak = new Keycloak({
    realm: 'xpressbees',
    serverUrl: 'https://stage-auth.xbees.in',
    clientId: 'billing-ui',
  });
app.use(keycloak.middleware());
const listProduct = (req, res) => {
    getProduct((err, results) => {
        /*try {
            const accessToken = req.kauth.grant.access_token.token;
            console.log("token",accessToken)
            // Make the API request with the token in the Authorization header
            const response = axios.get('https://localhost:5000', {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
        
            // Process the API response
            res.json(results);
          } catch (error) {
            // Handle any errors
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }*/
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  };
  
  
  const addProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  };
  
  const editProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProduct(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  };
  
  const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  };
  
  module.exports = {
    listProduct,
    addProduct,
    editProduct,
    deleteProduct
  };

