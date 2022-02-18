import { AnyAction } from 'redux';

import todosService from '../services/todos';
import { Todo } from '../types';

const getId = (): number => Number((100000 * Math.random()).toFixed(0));
const getUserId = ():number => Number((100000 * Math.random()).toFixed(0));

const reducer = (state = [], action: AnyAction ) => {
  switch (action.type) {
    case 'NEW_TODO':
      return [...state, action.data]
    case 'UPDATE_TODO':
      return state.map((todo: Todo) =>
        todo.id !== action.data.id ? todo : action.data
      );
    case 'INIT_TODOS':
      return action.data;
    default:
      return state;
  }
}

export const initializeTodos = () => {
  return async (dispatch: (arg0: { type: string; data: any; }) => void) => {
    const todos = await todosService.getAll()
    dispatch({
      type: 'INIT_TODOS',
      data: todos,
    })
  }
}

export const createTodo = (title: string) => {
  return async (dispatch: (arg0: { type: string; data: any; }) => void) => {
    const newTodo: Todo = {
      title,
      userId: getUserId(),
      id: getId(),
      completed: false
    }
    const data = await todosService.createNew(newTodo)
    dispatch({
      type: 'NEW_TODO',
      data
    })
  }
}

export const completedTodo = (todo: Todo) => {
  return async (dispatch: (arg0: { type: string; data: any; }) => void) => {
    const data = await todosService.update(todo)
    dispatch({
      type: 'UPDATE_TODO',
      data
    })
  }
}

export default reducer