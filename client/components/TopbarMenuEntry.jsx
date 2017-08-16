import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

// TODO dispatch an action that
// 1) marks item as annotated
// 2) uses a service to actually annotate the item
// 3) once item is annotated, disable the TopbarMenuEntry

const _TopbarMenuEntry = ({onClick, isChecked}) => {
    return (
        <ul>
            <li className='dropdown__menu-divider'></li>
            <li><button onClick={onClick}>Annotate</button></li>
        </ul>
    )
}

_TopbarMenuEntry.propTypes = {
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    item : state.item,
    isChecked: state.isChecked
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClick : () => dispatch({
      type : 'ANNOTATE'
    })
  }
}

export const TopbarMenuEntry = connect(mapStateToProps, mapDispatchToProps)(_TopbarMenuEntry)
