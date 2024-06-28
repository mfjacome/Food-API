const foodService = require('../services/foodService');

const getAllFoods = async (req, res) => {
    try {
        const foods = await foodService.getAllFoods();
        res.status(200).json(foods)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFoodById = async (req, res) => {
    try {
        const food = await foodService.getFoodById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found.' });
        }
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createFood = async (req, res) => {
    try {
        const food = await foodService.createFood(req.body);
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateFood = async (req, res) => {
    try {
        const food = await foodService.updateFood(req.params.id, req.body);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteFood = async (req, res) => {
    try {
        const food = await foodService.deleteFood(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.status(200).json({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
};