const express = require('express');
const router = express.Router();
const sparePartController = require('../controllers/sparePartController');

router.get('/', sparePartController.getAll);
router.get('/:id', sparePartController.getById);
router.post('/', sparePartController.create);
router.put('/:id', sparePartController.update);
router.delete('/:id', sparePartController.remove);

module.exports = router;
