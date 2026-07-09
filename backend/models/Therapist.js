const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
      enum: [
        "Massage",
        "Facial",
        "Hair Care",
        "Body Treatment",
        "Skin Care",
        "Wellness",
      ],
    },

    experience: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    available: {
      type: Boolean,
      default: true,
    },

    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Therapist", therapistSchema);