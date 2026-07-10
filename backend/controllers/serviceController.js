const Service = require("../models/Service");
const asyncHandler = require("../utils/asyncHandler");

// ==========================
// Get All Services
// ==========================
const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find();

  res.status(200).json({
    success: true,
    count: services.length,
    services,
  });
});

// ==========================
// Get Single Service
// ==========================
const getService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    const error = new Error("Service not found");
    error.statusCode = 404;
    return next(error);
  }

  res.status(200).json({
    success: true,
    service,
  });
});

// ==========================
// Create Service
// ==========================
const createService = asyncHandler(async (req, res) => {
  const serviceData = {
    ...req.body,
  };

  // Save uploaded image path (if uploaded)
  if (req.file) {
    serviceData.image = `/uploads/services/${req.file.filename}`;
  }

  const service = await Service.create(serviceData);

  res.status(201).json({
    success: true,
    message: "Service created successfully",
    service,
  });
});

// ==========================
// Update Service
// ==========================
const updateService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    const error = new Error("Service not found");
    error.statusCode = 404;
    return next(error);
  }

  Object.assign(service, req.body);

  // Update image if a new one is uploaded
  if (req.file) {
    service.image = `/uploads/services/${req.file.filename}`;
  }

  await service.save();

  res.status(200).json({
    success: true,
    message: "Service updated successfully",
    service,
  });
});

// ==========================
// Delete Service
// ==========================
const deleteService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    const error = new Error("Service not found");
    error.statusCode = 404;
    return next(error);
  }

  await service.deleteOne();

  res.status(200).json({
    success: true,
    message: "Service deleted successfully",
  });
});

module.exports = {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
};