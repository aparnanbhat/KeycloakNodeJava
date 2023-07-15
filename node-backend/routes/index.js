
const express = require("express");
const { listProduct, addProduct, editProduct, deleteProduct } = require("../controller/product.js");

// init express router
const router = express.Router();
  
// Get All Product
//router.get('/product', listProduct);

  
// Create New Product
router.post('/product', addProduct);
  
// Update Product
router.put('/product/:id', editProduct);
  
// Delete Product
router.delete('/product/:id', deleteProduct);
  
// export default router
module.exports = router;