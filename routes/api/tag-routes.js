// Import the Express Router module to create a router instance
const router = require('express').Router();
// Import Tag, Product, and ProductTag models from the models directory
const { Tag, Product, ProductTag } = require('../../models');

// Create a router for handling API requests for tags

// GET /api/tags
// Fetches all tags, including their associated products
router.get('/', async (req, res) => {

  // Get all tag with their associated products using Sequelize include option
  try {
    const tagData = await Tag.findAll({
      include: [Product] // Include related Products in the response
    });
    // Send successful response with status code 200 and the tag data
    res.status(200).json(tagData); 
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error); 
    req.status(500).json(error); 
  }
});

// GET /api/tags/:id
// Fetches a single tag by its ID, including associated products
router.get('/:id', async (req, res) => {

  // Find the tag by id with associated products using Sequelize findByPk
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product]
    });

    // If no tag found, send not found response and exit
    if (!tagData) {
      res.status(400).json({ message: 'No tag found with this id!' });
      return;
    }
    // Send successful response with status code 200 and the tag data
    res.status(200).json(tagData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// POST /api/tags
// Creates a new tag
router.post('/', async (req, res) => {
  // Create a new tag using Sequelize create method with data from request body
  try {
    const tagData = await Tag.create(req.body);
    // Send successful response with status code 200 and the new tag data
    res.status(200).json(tagData);
  } catch (error) {
    // Log any errors and send 400 bad request response
    console.log(error)
    res.status(400).json(error);
  }
});

// PUT /api/tags/:id
// Updates a tag's name by its ID
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // Update the tag with the provided id using Sequelize update method
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        // Extract the id from request parameters
        id: req.params.id,
      },
    });
    
    // Check if any rows were affected by the update (indicates update success)
    if (!tagData[0]) {
      // If no tag was found with the provided ID, send a 404 Not Found response
      res.status(404).json({ message: 'No tag found with this id!' });
      // Exit the function early to avoid sending a success response
      return;
    }
    // Send successful response with status code 200 and the new tag data
    res.status(200).json(tagData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// DELETE /api/tags/:id
// Deletes a tag by its ID
router.delete('/:id', async (req, res) => {

  // Update the tag with the provided id using Sequelize destroy method
  try {
    const tagData = await Tag.destroy({
      where: {
        // Extract the id from request parameters
        id: req.params.id
      }
    });

    // Check if any rows were affected by the update (indicates update success)
    if (!tagData) {
      // If no tag was found with the provided ID, send a 404 Not Found response
      res.status(404).json({ message: 'No tag found with this id!' })
      // Exit the function early to avoid sending a success response
      return;
    }

    // Send successful response with status code 200 and the new tag data
    res.status(200).json(tagData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// Export the router object to make it usable in other parts of the application
module.exports = router;
