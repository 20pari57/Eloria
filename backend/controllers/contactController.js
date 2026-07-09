const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

// ==========================
// Create Contact Message
// ==========================
const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    // Send Confirmation Email
    await sendEmail({
      email: contact.email,
      subject: "We've Received Your Message 💚",
      html: `
        <h2>Hello ${contact.name},</h2>

        <p>Thank you for contacting <strong>Eloria Spa</strong>.</p>

        <p>We have successfully received your message.</p>

        <p>Our support team will review your query and get back to you as soon as possible.</p>

        <br>

        <p>Have a wonderful day!</p>

        <h3>Team Eloria 🌸</h3>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Messages (Admin)
// ==========================
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Single Message
// ==========================
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    res.status(200).json({
      success: true,
      contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Message Status
// ==========================
const updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    contact.status = req.body.status;

    await contact.save();

    res.status(200).json({
      success: true,
      contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Message
// ==========================
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
};