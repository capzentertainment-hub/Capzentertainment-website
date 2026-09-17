require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  company: { type: String, trim: true, maxlength: 160 },
  email: { type: String, required: true, trim: true, maxlength: 180 },
  phone: { type: String, trim: true, maxlength: 40 },
  eventType: { type: String, trim: true, maxlength: 80 },
  eventDate: { type: String, trim: true },
  location: { type: String, trim: true, maxlength: 160 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  createdAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

app.post("/api/inquiries", async (req, res) => {
  try {
    const { name, company, email, phone, eventType, eventDate, location, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and event details are required."
      });
    }
    const inquiry = await Inquiry.create({
      name, company, email, phone, eventType, eventDate, location, message
    });
    res.status(201).json({ success: true, id: inquiry._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Unable to save enquiry." });
  }
});

app.get("/api/inquiries", async (req, res) => {
  try {
    if (!process.env.ADMIN_KEY || req.headers["x-admin-key"] !== process.env.ADMIN_KEY) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).lean();
    res.json({ success: true, inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to load enquiries." });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

async function start() {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    } else {
      console.warn("MONGODB_URI is not configured; API storage is disabled.");
    }
    app.listen(PORT, () => console.log(`Capz running at http://localhost:${PORT}`));
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
}
start();