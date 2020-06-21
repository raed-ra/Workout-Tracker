let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 21,
        weight: 101,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "Push Press",
        duration: 22,
        weight: 102,
        reps: 8,
        sets: 4
      },
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 23,
        weight: 103,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 24,
        weight: 104,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 105,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 26,
        distance: 8.5
      },     
       {
        type: "resistance",
        name: "Bicep Curl",
        duration: 27,
        weight: 106,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "Push Press",
        duration: 28,
        weight: 107,
        reps: 8,
        sets: 4
      },
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 29,
        weight: 108,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 30,
        weight: 109,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 31,
        weight: 110,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "B Press",
        duration: 32,
        weight: 111,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "TESTTTTT",
        duration: 33,
        weight: 112,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 34,
        weight: 113,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 36,
        distance: 9
      },
      {
        type: "resistance",
        name: "Military Press",
        duration: 35,
        weight: 114,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 36,
        distance: 9
      },     
       {
        type: "resistance",
        name: "Bicep Curl",
        duration: 37,
        weight: 115,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "Push Press",
        duration: 38,
        weight: 116,
        reps: 8,
        sets: 4
      },
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 39,
        weight: 117,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate())),
    exercises: [
      {
        type: "resistance",
        name: "Standard Press",
        duration: 40,
        weight: 118,
        reps: 10,
        sets: 5
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.insertMany(workoutSeed))
  .then(data => {
    // console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
