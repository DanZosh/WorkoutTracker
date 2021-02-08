// if a method isn't explicit, its a read/get request
const API = {
  async getLastWorkout() {
    console.log("getLastWorkout from api.js")
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1]; //this takes the url content after the `?`, splits the content at `=` and gets the string after the equal sign
      console.log("addExercise from api.js");
      console.log("id from api.js", id) 
    const res = await fetch("/api/workouts/" + id, { //below is the req for my api route
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    
    const json = await res.json(); //returned data is being parsed out of json
console.log(json)
console.log("success")
    return json; //returning out of the function
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
