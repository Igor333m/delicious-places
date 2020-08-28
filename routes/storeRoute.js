const express = require('express');
const router = express.Router();
const StoreModel = require('../models/StoreModel');

/**
 * @route POST api/store
 * @access Public
 * @async
 * @desc Create new store using Mongoose StoreModel
 */
router.post('/', async (req, res) => {
	try {
		const store = await StoreModel.create(req.body);
		return res.status(200).send(store);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Something went wrong' });
	}
});

module.exports = router;