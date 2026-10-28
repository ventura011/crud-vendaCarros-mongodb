import Car from "../models/Car.js"
import User from "../models/User.js"

const createCar = async (data) => {
    const {modelo, marca, ano, preco, placa} = data

    if (!modelo || !marca || !placa) {
        const error = new Error("Modelo, marca e placa do carro são obrigatórios.")
        error.statusCode = 400
        throw error
    }

    const plateExists = await User.findOne({ placa })

    if (plateExists) {
        const error = new Error("Placa já utilizada")
        error.statuscode = 400
        throw error
    }

    const car = await Car.create({
        modelo,
        marca,
        ano,
        preco,
        placa
    })

    return {
        _id: car._id,
        modelo: car.modelo,
        marca: car.marca,
        ano: car.ano,
        preco: car.preco,
        placa: car.placa,
        createdAt: car.createdAt,
        updateAt: car.updateAt

    }
}

const getAllCars = async () => {
    return Car.find()
}

const getCarById = async (id) => {
    const car = await Car.findById(id);

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarByPlate = async (placa) => {
    const car = await Car.findOne({placa});

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarByBrand = async (marca) => {
    const car = await Car.find({marca});

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const countAvailableCars = async (disponivel) => {
    const car = await Car.find({disponivel: true});

        if (!car) {
            const error = new Error("Carro não encontrado")
            error.statusCode = 404
            throw error
        }
 
        return car
}

export default {
    createCar,
    getAllCars,
    getCarById,
    getCarByPlate,
    getCarByBrand,
    countAvailableCars
}