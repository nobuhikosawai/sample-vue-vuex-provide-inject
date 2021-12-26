import { createStore } from "vuex";
import { todos, State as TodoState } from "./todos";

export type RootState = {
  todos: TodoState;
};

export default createStore({
  modules: {
    todos,
  },
});
