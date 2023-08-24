const express = require("express");

const { Auth } = require("../Middlewares/Auth");
const { ProjectModel } = require("../Models/projectModel");

const projectRoute = express.Router();

// Create New Project
projectRoute.post("/newproject", Auth, async (req, res) => {
  try {
    const { title } = req.body;

    // Projects with same Titles should bot be created.
    const SameTitleExists = await ProjectModel.findOne({ title });
    if (SameTitleExists) {
      return res
        .status(400)
        .json({ msg: "Project with same Title already exists." });
    }

    const ProjectData = ProjectModel(req.body);
    await ProjectData.save();

    res.status(201).json({ msg: "Project Created Successfully" });
  } catch (error) {
    console.error("Creating Project Error :", error);
    res.status(500).json({ msg: "Creating Projects Error" });
  }
});

// Get Projects
projectRoute.get("/", Auth, async (req, res) => {
  try {
    const { userId } = req.body;
    const UserProjects = await ProjectModel.find({ userId });

    res.status(201).json(UserProjects);
  } catch (error) {
    console.error("Getting Projects Error :", error);
    res.status(500).json({ msg: "Getting Projects Error" });
  }
});

// Update a Project
projectRoute.patch("/update/:projectId", Auth, async (req, res) => {
  try {
    const { projectId } = req.params;

    const FoundAndUpdate = await ProjectModel.findByIdAndUpdate(
      projectId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!FoundAndUpdate) {
      return res.status(204).json({ msg: "Project not found" });
    }

    res.status(200).json({ msg: "Project Updated" });
  } catch (error) {
    console.error("Updating Project Error :", error);
    res.status(500).json({ msg: "Updating Project Error" });
  }
});

// Delete a Project
projectRoute.delete("/delete/:projectId", Auth, async (req, res) => {
  try {
    const { projectId } = req.params;

    const FoundAndUpdate = await ProjectModel.findByIdAndDelete(projectId);

    if (!FoundAndUpdate) {
      return res.status(204).json({ msg: "Project not found" });
    }

    res.status(200).json({ msg: "Project Deleted" });
  } catch (error) {
    console.error("Deleting Project Error :", error);
    res.status(500).json({ msg: "Deleting Project Error" });
  }
});

module.exports = { projectRoute };
