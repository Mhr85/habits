import axios from "axios";

export default {

  // @route POST /api/habit
  // @desc  post new habit to db from form
  saveHabit: (habit, id) => {

    axios.post(`api/habits/${id}`, habit)
      // .then((res) => console.log(`Saved habit to id ${id}: ${res}`))
     .then((res) => {
      console.log(`Saved habit to id ${id}: ${res}`);
      window.location.href= "/habitslist"
     })

  },

  // @route GET /api/habit
  // @desc  get all habits for id
  findHabits: (id) => {

    return axios.get(`api/habits/${id}`);
    // axios.get(`http://localhost:3002/api/habits/${id}`, (req, res) => {
    //   console.log(`API.js response: ${res}`)
    //   return res;
    // })
  },

  deleteHabit: (id) => {
    return axios.delete(`api/habits/${id}`);

//    Send Id to the backend and write a query to delete from the db

  }


};
