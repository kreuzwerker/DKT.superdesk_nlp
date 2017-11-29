export default (state = {annotating: false, annotated: false, isChecked: true, item: {}, error: null}, action) => {
  switch (action.type) {
    case 'ANNOTATE_START':
      return {...state, annotating: true}
    case 'ANNOTATE_END':
      return {...state, annotated: !state.annotated, annotating: false, item: action.item}
    case 'ANNOTATE_ERROR':
      return {...state, error: action.error}
    case 'TOGGLE_ANNOTATIONS':
      return {...state, isChecked: !state.isChecked}
    default:
      return state
  }
}
