import { inject, InjectionKey, provide, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export const todos = (() => {
  const todos = ref<Todo[]>([]);

  const addTodo = (title: string) => {
    const todo: Todo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    todos.value.push(todo);
  };

  return { todos, addTodo };
})();

type TodosType = typeof todos;

const todoKey: InjectionKey<TodosType> = Symbol("useTodos");

export const provideTodos = () => provide(todoKey, todos);
export const useTodos = () => inject(todoKey)!;
