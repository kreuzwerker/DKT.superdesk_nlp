const annotateItem = item => {
  return (dispatch, getState, { api, authoringWorkspace }) => {
    console.log("state", authoringWorkspace.getState());
    dispatch({ type: "ANNOTATE_START" });
    return api.entity_extraction
      .create({ item })
      .then(result => {
        dispatch({ type: "ANNOTATE_END", item: result });
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({ type: "ANNOTATE_ERROR", error: error });
        return Promise.reject(error);
      });
  };
};

const updateAuthoringWorkspace = item => {
  return (dispatch, getState, { authoringWorkspace }) => {
    item.item.headline = "<p>foobar</p>";
    console.log("update editor: ", item);
    authoringWorkspace.update(item.item);
    var workspaceState = authoringWorkspace.getState();
    workspaceState = {
      item: authoringWorkspace.getItem(),
      action: authoringWorkspace.getAction()
    };
    console.log("updated!");
  };
};

export { annotateItem, updateAuthoringWorkspace };
