import { createStore } from "redux";
import Reducer from "../Reducer";
const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost"
};
const store = createStore(Reducer, initialState);
export default store;
