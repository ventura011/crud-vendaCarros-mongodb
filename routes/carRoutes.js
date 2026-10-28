import express from "express"
import carController from "../controllers/carController.js"

const router = express.Router()

router.post(
    "/",
    carController.createCar
)

router.get(
    "/",
    carController.getAllCars
)

router.get(
    "/:id",
    carController.getCarById
)

router.get(
    "/plate/:plate",
    carController.getCarByPlate
)

router.get(
    "/brand/:brand",
    carController.getCarByBrand
)

router.get(
    "/available/count",
    carController.countAvailableCars
)

export default router;
