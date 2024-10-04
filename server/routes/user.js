const router = require("express").Router()

const User = require("../models/User")
const Listing = require("../models/Listing")

/* GET PROPERTY LIST */
router.get("/:userId/items", async (req, res) => {
  try {
    const { userId } = req.params
    const properties = await Listing.find({ creator: userId }).populate("creator")
    res.status(202).json(properties)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: "Can not find properties!", error: err.message })
  }
})

module.exports = router