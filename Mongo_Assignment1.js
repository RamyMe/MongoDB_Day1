// MONGO DB TASK 1

// For the following question write the corresponding MongoDB queries

// Find all the information about each products
db.products.find({});

// Find the product price which are between 400 to 800
db.products.find({ product_price: { $gt: 400, $lt: 800 } }, { product_price: 1, _id: 0 });

// Find the product price which are not between 400 to 600
db.products.find({ product_price: { $not: { $gt: 400, $lt: 600 } } }, { product_price: 1, _id: 0 });

// List the four product which are greater than 500 in price 
db.products.find({ product_price: { $gt: 500 } }).limit(4);

// Find the product name and product material of each products
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });

// Find the product with a row id of 10
db.products.find({ id: "10" });

// Find only the product name and product material
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });

// Find all products which contain the value of soft in product material 
db.products.find({ product_material: /soft/i });

// Find products which contain product color indigo  and product price 492.00
db.products.find({ product_color: "indigo", product_price: 492.00 });

// Delete the products which product price value are 28
db.products.deleteMany({ product_price: 28 });