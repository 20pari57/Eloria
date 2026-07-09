const Therapist = require("../models/Therapist");

// Get All Therapists
const getTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.find();

    res.status(200).json({
      success: true,
      count: therapists.length,
      therapists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Therapist
const getTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);

    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: "Therapist not found",
      });
    }

    res.status(200).json({
      success: true,
      therapist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Therapist
const createTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.create(req.body);

    res.status(201).json({
      success: true,
      therapist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Therapist
const updateTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: "Therapist not found",
      });
    }

    res.status(200).json({
      success: true,
      therapist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Therapist
const deleteTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);

    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: "Therapist not found",
      });
    }

    await therapist.deleteOne();

    res.status(200).json({
      success: true,
      message: "Therapist deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getTherapists,
  getTherapist,
  createTherapist,
  updateTherapist,
  deleteTherapist,
};