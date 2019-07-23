const router = require("express").Router();
const Habit = require('../../models/Habit')

router.post('/:id', (req, res) => {
  console.log(`Incoming request - POST new habit:`);
  console.log(`ID: ${req.params.id}`)
  console.log(`Habit: ${JSON.stringify(req.body, null, 4)}`)
  const newHabit = new Habit({
    userId: req.params.id,
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration
  })

  newHabit.save()
  console.log(`Habit ${JSON.stringify(newHabit, null, 2)} saved!`)

});

router.get('/:id', (req, res) => {
<<<<<<< HEAD
  console.log(res);
  Habit.find({ userId: req.params.id })
    .then((res) => console.log(`All habits for ${req.params.id}:  ${res}`))
    return(res)
=======

  const allHabits = Habit.find({ userId: req.params.id })
    .then((allHabits) => {
      console.log(`All habits for ${req.params.id}:  ${allHabits}`)
      res.json(allHabits)
    })
>>>>>>> 9bb961307059ca9c7079d3a1474c772460cf3049
})

module.exports = router;
