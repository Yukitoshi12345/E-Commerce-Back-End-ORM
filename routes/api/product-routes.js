// Import the Express Router module to create a router instance
const router = require('express').Router();
// Import Category, Product, Tag, ProductTag models from the models directory
const { Product, Category, Tag, ProductTag } = require('../../models');

// Create a router for handling API requests for tags

// GET /api/product
// Fetches all product, including their associated Category and Tag data.
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data

  // Get all products with their associated Category and Tag using Sequelize include option
  try {
    const productData = await Product.findAll({
      include: [Category, Tag] // Include related Category and Tag in the response
    });
    // Send successful response with status code 200 and the product data
    res.status(200).json(productData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// get one product
// GET /api/product/:id
// Fetches a single tag by its ID, including associated Category and Tag data.
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  // Update the product with the provided id using Sequelize findByPk method
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [Category, Tag]
    });

    // If no product found, send not found response and exit
    if (!productData) {
      res.status(400).json({ message: 'No product found with this id!' });
      return;
    }
    // Send successful response with status code 200 and the product data
    res.status(200).json(productData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// // create new product
// router.post('/', (req, res) => {
//   /* req.body should look like this...
//     {
//       product_name: "Basketball",
//       price: 200.00,
//       stock: 3,
//       tagIds: [1, 2, 3, 4]
//     }
//   */
//   Product.create(req.body)
//     .then((product) => {
//       // if there's product tags, we need to create pairings to bulk create in the ProductTag model
//       if (req.body.tagIds.length) {
//         const productTagIdArr = req.body.tagIds.map((tag_id) => {
//           return {
//             product_id: product.id,
//             tag_id,
//           };
//         });
//         return ProductTag.bulkCreate(productTagIdArr);
//       }
//       // if no product tags, just respond
//       res.status(200).json(product);
//     })
//     .then((productTagIds) => res.status(200).json(productTagIds))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// POST /api/product
// Creates a new product

// Using async and await
// Create new product
// POST /api/product
// Creates a new product
router.post('/', async (req, res) => {
  try {

    // Update the product with the provided id using Sequelize create method
    const productData = await Product.create(req.body);

    // Check if any product tags are provided
    if (req.body.tagIds.length) {
      // Create an array of product-tag associations
      const productTagIdArr = req.body.tagIds.map((tagId) => ({
        product_id: product.id,
        tag_id: tagId,
      }));

      // Bulk create product-tag associations
      await ProductTag.bulkCreate(productTagIdArr);
    }

    // Send successful response with status code 200 and the new product data
    res.status(200).json(productData);
  } catch (error) {
    // Log any errors and send 400 bad request response
    console.error(error);
    res.status(400).json(error);
  }
});

// update product
// router.put('/:id', (req, res) => {
//   // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       if (req.body.tagIds && req.body.tagIds.length) {
        
//         ProductTag.findAll({
//           where: { product_id: req.params.id }
//         }).then((productTags) => {
//           // create filtered list of new tag_ids
//           const productTagIds = productTags.map(({ tag_id }) => tag_id);
//           const newProductTags = req.body.tagIds
//           .filter((tag_id) => !productTagIds.includes(tag_id))
//           .map((tag_id) => {
//             return {
//               product_id: req.params.id,
//               tag_id,
//             };
//           });

//             // figure out which ones to remove
//           const productTagsToRemove = productTags
//           .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//           .map(({ id }) => id);
//                   // run both actions
//           return Promise.all([
//             ProductTag.destroy({ where: { id: productTagsToRemove } }),
//             ProductTag.bulkCreate(newProductTags),
//           ]);
//         });
//       }

//       return res.json(product);
//     })
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });


// Using async and await
// Update product
// PUT /api/product/:id
// Updates a product's name by its ID
router.put('/:id', async (req, res) => {
  try {
    // Update the product with the provided id using Sequelize update method
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // Check if tag IDs are provided in the request body
    if (req.body.tagIds && req.body.tagIds.length) {
      // Find existing product tags
      // Retrieve existing product tags associated with the updated product
      const existingProductTags = await ProductTag.findAll({
        // Filter tags based on the product ID
        where: { product_id: req.params.id },
      });

      // Create filtered lists of new and to-be-removed tags
      const newProductTags = req.body.tagIds
        .filter((tagId) => !existingProductTags.some((tag) => tag.tag_id === tagId))
        // Create objects for new product-tag associations
        .map((tagId) => ({ product_id: req.params.id, tagId }));

      // Filter out tag IDs that are no longer associated with the product
      const productTagsToRemove = existingProductTags
        .filter((tag) => !req.body.tagIds.includes(tag.tag_id))
        .map((tag) => tag.id);

      // Execute both updates (destroy and create) in parallel
      await Promise.all([
        // Remove existing product-tag associations that are no longer needed
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        // Create new product-tag associations
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    // Send successful response with updated product data
    res.json(productData);
  } catch (error) {
    // Log any errors and send 400 bad request response
    console.error(error);
    res.status(400).json(error);
  }
});


// DELETE /api/product/:id
// Deletes a product by its ID
router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  // Update the product with the provided id using Sequelize destroy method
  try {
    const productData = await Product.destroy({
      where: {
        // Extract the id from request parameters
        id: req.params.id
      }
    });

    // Check if any rows were affected by the update (indicates update success)
    if (!productData) {
      // If no product was found with the provided ID, send a 404 Not Found response
      res.status(404).json({ message: 'No product found with this id!' })
      // Exit the function early to avoid sending a success response
      return;
    }

    // Send successful response with status code 200 and the new product data
    res.status(200).json(productData);
  } catch (error) {
    // Log any errors and send 500 internal server error response
    console.log(error);
    res.status(500).json(error);
  }
});

// Export the router object to make it usable in other parts of the application
module.exports = router;
