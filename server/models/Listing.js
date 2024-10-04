const mongoose = require("mongoose")

const ListingSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title:{
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    images: [{ type: String }], // Store photo URLs

  },
  { timestamps: true}
)

const Listing = mongoose.model("Listing", ListingSchema )
module.exports = Listing