// ROUTES
const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");

const Workout = require("../models/workout");

// workouts page
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

// completed workouts
router.post("/api/workouts", (req, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

// update workouts
router.put("/api/workouts/:id", (req, res) => {
  Workout.update(
    { _id: req.params.id },
    { $set: { exercises: [req.body] } }
  ).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

// range page
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
    .catch(err => {
      res.status(400).json(err);
  });
});

module.exports = router;