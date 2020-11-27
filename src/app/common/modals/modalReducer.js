const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload: payload
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

const initState = null

export default function modalReducer(state = initState, { type, payload}) {
  switch (type) {
    case OPEN_MODAL:
      const { modalType, modalProps } = payload
      return { 
        modalType: modalType,
        modalProps: modalProps
      }
    case CLOSE_MODAL:
      return null
    default:
      return state
  }
}