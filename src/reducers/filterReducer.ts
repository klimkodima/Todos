import { AnyAction } from 'redux';

const reducer = (state = 'ALL', action: AnyAction) => {
  switch (action.type) {
  case 'SET_FILTER':
    return action.data.filter
  default:
    return state
  }
}

export const filterChange = (filter: string)=> {
  return {
    type: 'SET_FILTER',
    data: {
      filter
    }
  }
}

export default reducer