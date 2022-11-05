const router = require('express').Router();

const controller = require("../controller/flightController")

router.get("/", controller.getFlights);

router.post("/", controller.createFlight);

module.exports = router;