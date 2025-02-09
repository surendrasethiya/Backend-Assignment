const Item = require('../models/itemModel')
const catchAsync = require('../utils/catchAsync');

exports.getAllItems = catchAsync(async (req, res, next) => {
    const allItems = await Item.findAll();
    res.status(200).json({
        status: 'success',
        results: allItems.length,
        data: allItems
    });
})

exports.createitem = catchAsync(async (req, res, next) => {
    const newItem = await Item.create({
        name: req.body.name,
        description: req.body.description
    })

    res.status(201).json({
        status: 'success',
        data: newItem
    });

})

exports.getItemById = catchAsync(async (req, res, next) => {
    const itemId = req.params.id;
    const item = await Item.findByPk(itemId);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({
        status: 'success',
        data: item
    });

})

exports.updateItem = catchAsync(async (req, res, next) => {
    const productId = req.params.id;
    const updatedData = req.body; // Data from request body

    const item = await Item.findByPk(productId);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    const updatedItem = await item.update(updatedData);

    res.status(200).json({
        status: 'success',
        data: updatedItem
    });

})

exports.deleteItem = catchAsync(async (req, res, next) => {
    const item = await Item.findByPk(req.params.id);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    await item.destroy();

    res.status(200).json({
        status: 'success'
    });

})