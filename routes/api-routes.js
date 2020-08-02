// * Add exercises to a previous workout plan.
// * Add new exercises to a new workout plan.
// * View multiple the combined weight of multiple exercises on the stats page.

// ROUTES
const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");

const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.post("/api/workouts", (req, res) => {
  Workout.insertMany(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.put("/api/workouts/:id", (req, res) => {
  Workout.update(
    { _id: req.params.id },
    { $set: { exercises: [req.body] } }
  ).then((workoutdb) => {
    res.json(workoutdb);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(workoutdb => {
      res.json(workoutdb);
  })
    .catch(err => {
      res.status(400).json(err);
  });
});

module.exports = router;

    // workouts page
    app.get("/api/workouts", (req, res) => {
      Workout.find({}).then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
  })

  // range page
  app.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  // completed workouts
  app.post("/api/workouts/", (req, res) => {
      Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
          res.status(400).json(err);
        });
    });

    // update workouts
    app.put("/api/workouts/:id", (req, res) => {
      Workout.findByIdAndUpdate(
        { _id: req.params.id }, { exercises: req.body }
      ).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
  });