const express = require('express');
const router = express.Router();
const controller = require('../controllers/sparePartController');

router.get('/', controller.getAllSpareParts);
router.post('/', controller.createSparePart);
router.put('/:id', controller.updateSparePart);
router.delete('/:id', controller.deleteSparePart);

module.exports = router;
