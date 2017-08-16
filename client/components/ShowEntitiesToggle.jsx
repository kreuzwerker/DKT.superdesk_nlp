import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import './style.scss'

// TODO dispatch an action that
// 1) only visible when item is annotated
// 2) actually toggle annotations inside the editor

const _ShowEntitiesToggle = ({annotated, isChecked, onClick, foo}) => {
    const showEntitiesToggle = <div className='show-entities-toggle'>
            <span className={'pull-right sd-toggle ng-not-empty ng-valid' + (isChecked?" checked":"")} checked="{isChecked?'checked':''}" onClick={onClick}>
                <span className='inner'></span>
            </span>
            <label>Show entities</label>
        </div>
    return (
        annotated ? showEntitiesToggle : null
    )
}

_ShowEntitiesToggle.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    annotated: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    foo: PropTypes.string
}

const mapStateToProps = state => {
  return {
    annotated: state.annotated,
    isChecked: state.isChecked
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClick : () => dispatch({
      type : 'TOGGLE_ANNOTATIONS'
    })
  }
}

export const ShowEntitiesToggle = connect(mapStateToProps, mapDispatchToProps)(_ShowEntitiesToggle)
