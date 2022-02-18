export interface Todo {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}

export interface State {
  todos: Todo[];
  filter: string;
  notification: string;
}

