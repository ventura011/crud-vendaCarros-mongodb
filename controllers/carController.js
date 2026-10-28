import carService from "../services/carService.js"

const createCar = async (req, res, next) => {
    try {
        const car = await carService.createCar(req.body)

        res.status(201).json({
            message: "Carro criado com sucesso!",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const getAllCars = async (req, res, next) => {
    try {
        const cars = await carService.getAllCars()

        res.status(200).json({
            message: "Carros encontrados com sucesso",
            total: cars.length,
            data: cars
        })
    } catch (error) {
        next(error)
    }
}

const getCarById = async (req, res, next) => {
    try {
        const car = await carService.getCarById(req.params.id)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const getCarByPlate = async (req, res, next) => {
    try {
        const car = await carService.getCarByPlate(req.params.plate)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const getCarByBrand = async (req, res, next) => {
    try {
        const car = await carService.getCarByBrand(req.params.brand)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            total: car.length,
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const countAvailableCars = async (req, res, next) => {
    try {
        const car = await carService.countAvailableCars(req.disponivel)

        res.status(200).json({
            message: "Carros disponiveis encontrados",
            total: car.length,
            data: car
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createCar,
    getAllCars,
    getCarById,
    getCarByPlate,
    getCarByBrand,
    countAvailableCars
}