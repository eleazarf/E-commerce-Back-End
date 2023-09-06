const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryByID = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    if (categoryByID) {
      res.json(categoryByID);
    } else {
      res.status(404).json({ error: "No category by with this ID" });
    }
  } catch (error) {
    res.status(501).json(error);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedCategory) {
      res.json(updatedCategory);
    } else {
      res.status(404).json({ error: "No category by with this ID" });
    }
  } catch (error) {
    res.status(503).json(error);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedCategory) {
      res.json(deletedCategory);
    } else {
      res.status(404).json({ error: "No category with this ID" });
    }
  } catch (error) {
    res.status(503).json(error);
  }
});

module.exports = router;
