const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  Category: String,
});

// Register the 'Products' model globally
const ProductsModel = mongoose.model("Products", productSchema);

const SaveInDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/E-Comm");

  let data = new ProductsModel({
    name: "m8",
    price: 200,
    brand: "xyz",
    Category: "Mobile",
  });

  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/E-Comm"); // Connect to the database if not already connected

    let data = await ProductsModel.updateOne(
      {
        name: 'm8',
      },
      {
        $set: {
          name: 'Samsung',
          price: 2300,
        },
      }
    );

    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect(); // Close the database connection when done
  }
}

SaveInDb(); // Call the SaveInDb function to save data to the database
updateInDB(); // Call the updateInDB function to update data in the database
