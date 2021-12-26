import { Module } from "vuex";
import { RootState } from "./index";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type State = {
  todos: Todo[];
};

export const todos: Module<State, RootState> = {
  namespaced: true,

  state: {
    todos: [],
  },

  getters: {
    todos: (state) => state.todos,
  },

  actions: {
    addTodo: ({ commit }, title: string) => {
      commit("ADD_TODO", title);
    },
  },

  mutations: {
    ADD_TODO: (state, title: string) => {
      state.todos.push({
        id: uuidv4(),
        title,
        isCompleted: false,
      });
    },
  },
};
