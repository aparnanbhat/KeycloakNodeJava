
const db = require("../config/index.js");

module.exports.getProduct = (result) => {
    db.query("SELECT * FROM backend.product", (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
  

module.exports.insertProduct = (data, result) => {
    db.query("INSERT INTO backend.product (product_name, price) VALUES ($1, $2)", [data.product_name, data.price], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  }


module.exports.updateProductById = (data, id, result) => {
    db.query(
      "UPDATE backend.product SET product_name = $1, price = $2 WHERE product_id = $3",
      [data.product_name, data.price, data.product_id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };
  

module.exports.deleteProductById = (id, result) => {
    db.query("DELETE FROM backend.product WHERE product_id = $1", [id], (err, results) => {             
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
  