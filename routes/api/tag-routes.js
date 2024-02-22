const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    req.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product]
    });
    if (!tagData) {
      res.status(400).json({ message: 'No tag found with this id!' });
      return;
    }
      res.status(200).json(tagData);
    } catch (error) {
      // Log any errors and send 500 internal server error response
      console.log(error);
      res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
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

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' })
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
