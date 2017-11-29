import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";
import { EntityRecognitionService } from "../services/EntityRecognitionService";

// TODO dispatch an action that
// 1) marks item as annotated
// 2) uses a service to actually annotate the item
// 3) once item is annotated, disable the TopbarMenuEntry

const _TopbarMenuEntry = ({ annotationActions, isChecked, item, editor }) => {
  const erService = EntityRecognitionService(editor);

  const handleAnnotateClick = () => {
    annotationActions.annotateItem(item).then(() => {
      erService.highlight();
    });
  };

  return (
    <ul>
      <li className="dropdown__menu-divider" />
      <li>
        <button onClick={() => handleAnnotateClick()}>Annotate</button>
      </li>
    </ul>
  );
};

_TopbarMenuEntry.propTypes = {
  isChecked: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    item: state.item,
    isChecked: state.isChecked,
    editor3: state.editor3
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    annotationActions: bindActionCreators(actions, dispatch)
  };
};

export const TopbarMenuEntry = connect(mapStateToProps, mapDispatchToProps)(
  _TopbarMenuEntry
);
