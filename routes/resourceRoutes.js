const express = require("express");
const router = express.Router();
const db = require("../models");
const Resource = db.Resource;

// Get all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    console.error("Error fetching resources:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a single resource by ID
router.get("/:id", async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(resource);
  } catch (error) {
    console.error("Error fetching resource:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a resource
router.post("/", async (req, res) => {
  try {
    const { title, description, type } = req.body;
    const resource = await Resource.create({ title, description, type });
    res.status(201).json(resource);
  } catch (error) {
    console.error("Error creating resource:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a resource
router.put("/:id", async (req, res) => {
  try {
    const { title, description, type } = req.body;
    await Resource.update(
      { title, description, type },
      { where: { id: req.params.id } }
    );
    res.json({ message: "Resource updated" });
  } catch (error) {
    console.error("Error updating resource:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a resource
router.delete("/:id", async (req, res) => {
  try {
    await Resource.destroy({ where: { id: req.params.id } });
    res.json({ message: "Resource deleted" });
  } catch (error) {
    console.error("Error deleting resource:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
