export default (state = {annotated: false, isChecked: true, item: {}}, action) => {
  switch (action.type) {
    case 'ANNOTATE':
      return {...state, annotated: !state.annotated}
    case 'TOGGLE_ANNOTATIONS':
      return {...state, isChecked: !state.isChecked}
    default:
      return state
  }
}
