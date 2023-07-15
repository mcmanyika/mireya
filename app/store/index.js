import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    isOpen: false,
    isOverlayVisible: false,
})

export {
  setGlobalState,
  useGlobalState,
  getGlobalState,
}