import { AnyAction } from 'redux';

const reducer = (state = null, action: AnyAction) => {
  switch (action.type) {
  case 'SHOW':
    return action.data
  case 'HIDE':
    return null
  default:
    return state
  }
}

export const setNotification = (message: string, time: number) => {
  return async (dispatch: (arg0: { type: string; data?: string; }) => void) => {
    dispatch({
      type: 'SHOW',
      data: message
    })
    clearTimeout()
    setTimeout(() => {
      dispatch({
        type: 'HIDE'
      })
    }, time * 1000)
  }
}

export default reducer