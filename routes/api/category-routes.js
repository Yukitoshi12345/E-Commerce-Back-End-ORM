// Import the Express Router module to create a router instance
const router = require("express").Router();
// Import Category and Product models from the models directory
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Base endpoint for accessing categories
router.get("/", async (req, res) => {
  // Get all categories with their associated products using Sequelize include option
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    // Send successful response with status code 200 and the category data
    res.status(200).json(categoryData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// Endpoint to get a specific category by its id
router.get("/:id", async (req, res) => {
  // Find the category by id with associated products using Sequelize findByPk
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    // If no category found, send not found response and exit
    if (!categoryData) {
      res.status(404).json({ message: "No categories found with this id!" });
      return;
    }
    // Send successful response with status code 200 and the category data
    res.status(200).json(categoryData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// Endpoint to create a new category
router.post("/", async (req, res) => {
  // Create a new category using Sequelize create method with data from request body
  try {
    // Create the new category
    const categoryData = await Category.create(req.body);

    // Send successful response with status code 200 and the new category data
    res.status(200).json(categoryData);
  } catch (error) {
    // Log any errors and send 400 bad request response
    console.log(error);
    res.status(400).json(error);
  }
});

// Endpoint to update a category by its id
router.put("/:id", async (req, res) => {
  // Update the category with the provided id using Sequelize update method
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        // Extract the id from request parameters
        id: req.params.id,
      },
    });

    // Retrieve the updated category data to send in the response
    const updatedCategoryData = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    // Check if any rows were affected by the update (indicates update success)
    if (!categoryData[0]) {
      // If no category was found with the provided ID, send a 404 Not Found response
      res.status(404).json({ message: "No category found with this id!" });
      // Exit the function early to avoid sending a success response
      return;
    }
    // Send successful response with status code 200 and the new category data
    res.status(200).json(updatedCategoryData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// Endpoint to delete a category by its ID
router.delete("/:id", async (req, res) => {
  // Delete a category by ID using Sequelize destroy method
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    // If no category found, send not found response and exit
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    // Send successful response with status code 200 and the new category data
    res.status(200).json(categoryData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// Export the router object to make it usable in other parts of the application
module.exports = router;
