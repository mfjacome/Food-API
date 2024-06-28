const foodModel = require('../models/foodModel');

//buscando todos os alimentos
const getAllFoods = async () => {
    return await foodModel.find();
};

//buscando alimentos por id
const getFoodById = async (id) => {
    return await foodModel.findById(id);
};

//criando alimento no database
const createFood = async (foodData) => {
    const food = new foodModel(foodData);
    await food.save();
    return food;
};

//atualizando alimento no database
const updateFood = async (id, foodData) => {
    return await foodModel.findByIdAndUpdate(id, foodData, { new: true });
};

//deletando alimento 
const deleteFood = async (id) => {
    return await foodModel.findByIdAndDelete(id);
};

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
};
