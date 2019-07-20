import axios from "axios";

export default {

  // @route POST /api/habit
  // @desc  post new habit to db from form
  saveHabit: (habit, id) => {
    
    axios.post(`http://localhost:3002/api/habits/${id}`, habit)
      .then((res) => console.log(`Saved habit to id ${id}: ${res}`))
  },

  // @route GET /api/habit
  // @desc  get all habits for id
  findHabits: (id) => {

    axios.get(`http://localhost:3002/api/habits/${id}`, (req, res) => {
      console.log(`API.js response: ${res}`)
      return res;
    })
  }
};
