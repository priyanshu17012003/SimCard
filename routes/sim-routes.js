const express = require("express");
const simController = require("../controllers/simcard-controller");
const router = express.Router();

router.post("/activate", simController.activate);
router.post("/deactivate", simController.deactivate);
router.post("/sim-details/:simNumber", simController.simDetails);

module.exports = router;