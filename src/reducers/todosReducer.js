import todosService from '../services/todos';

const getId = () => (100000 * Math.random()).toFixed(0);
const getUserId = () => (100000 * Math.random()).toFixed(0);

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TODO':
      return [...state, action.data]
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id !== action.data.id ? todo : action.data
      );
    case 'INIT_TODOS':
      return action.data;
    default:
      return state;
  }
}

export const initializeTodos = () => {
  return async dispatch => {
    const todos = await todosService.getAll()
    dispatch({
      type: 'INIT_TODOS',
      data: todos,
    })
  }
}

export const createTodo = (title) => {
  return async dispatch => {
    const newTodo = {
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

export const completedTodo = (todo) => {
  return async dispatch => {
    const data = await todosService.update(todo)
    dispatch({
      type: 'UPDATE_TODO',
      data
    })
  }
}

export default reducer