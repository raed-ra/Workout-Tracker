const router = require("express").Router();
const Workout = require("../../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  //console.log("put"+body)
  //console.log("params"+params)
  //console.log("params23423432"+{ body, params })
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  let startDate = new Date(new Date().setDate(new Date().getDate()-7))
  let endDate = new Date(new Date().setDate(new Date().getDate()))
  Workout.find({ day: { $gte: startDate , $lte: endDate}})
    .then(dbWorkouts => {
      //console.log("line45"+dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;
