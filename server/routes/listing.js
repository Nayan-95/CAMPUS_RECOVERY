const router = require("express").Router();

const Listing = require("../models/Listing");
const User = require("../models/User");

/* CREATE LISTING */
router.post("/create", async (req, res) => {
  try {
    /* Take the information from the form */
    const {
      creator,
      category,
      title,
      description,
      latitude,
      longitude,
      address,
      images,
    } = req.body;

    const newListing = new Listing({
      creator,
      category,
      title,
      description,
      latitude,
      longitude,
      address,
      images,
    });

    await newListing.save();

    res.status(200).json(newListing);
  } catch (err) {
    res
      .status(409)
      .json({ message: "Fail to create Listing", error: err.message });
    console.log(err);
  }
});

/* GET lISTINGS BY CATEGORY */
router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  // console.log(qCategory);

  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ category: qCategory }).populate(
        "creator"
      );
    } else {
      listings = await Listing.find().populate("creator");
    }

    res.status(200).json(listings);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Fail to fetch listings", error: err.message });
    console.log(err);
  }
});

/* LISTING DETAILS */
router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId).populate("creator");
    res.status(202).json(listing);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Listing can not found!", error: err.message });
  }
});

router.delete("/:deleteId", async (req, res) => {
  try {
    const { deleteId } = req.params;
    const { currentUserId, creatorId } = req.body;
    if (currentUserId === creatorId) {
      await Listing.findByIdAndDelete(deleteId);
      return res
        .status(200)
        .json({ message: "Item deleted successfully.", status: 200 });
      // console.log()
    }
    if (currentUserId != creatorId) {
      res.status(404).json({ message: "You are not authorized." });
    }
  } catch (err) {
    res
      .status(404)
      .json({ message: "Failed to delete post", error: err.message });
  }
});

module.exports = router;
