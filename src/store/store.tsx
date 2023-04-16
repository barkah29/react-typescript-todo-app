import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: String;
  title: String;
  isCompleted: boolean;
};

type State = {
  todos: Todo[];
};

type Action = {
  addNewTodos: (values: String) => void;
  completedTodos: (id: String, status: boolean) => void;
  removeTodo: (id: String) => void;
};

export const useTodos = create(
  persist<State & Action>(
    (set) => ({
      todos: [],
      addNewTodos: (values: String) => {
        set((state) => ({
          todos: [
            ...state.todos,
            { id: uuidv4(), title: values, isCompleted: false },
          ],
        }));
      },

      completedTodos: (id: String, status: boolean) => {
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === id ? { ...item, isCompleted: status } : item
          ),
        }));
      },

      removeTodo: (id: String) => {
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "todos",
    }
  )
);
