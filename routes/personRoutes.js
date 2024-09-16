const express = require("express");
const router = express.Router();
const person = require("./../models/person");

// General GET request to fetch all person data
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Parameterized GET request for fetching based on work type
router.get("/work/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;

    // Validate if workType is present and is valid
    if (["chef", "manager", "waiter"].includes(workType)) {
      const response = await person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST request for adding a new person
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:person_id", async (req, res) => {
  try {
    const person_id = req.params.person_id;
    const updatedpersondata = req.body;
    const response = await person.findByIdAndUpdate(
      person_id,
      updatedpersondata,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "person  not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.delete("/:person_id", async (req, res) => {
  try {
    const person_id = req.params.person_id;
    const response = await person.findByIdAndDelete(person_id);
    if (!response) {
      return res.status(404).json({ error: "person  not found" });
    }
    console.log("person deleted");
    res.status(200).json({ message: "the person successfully deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
