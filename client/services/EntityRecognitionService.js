export function EntityRecognitionService(editor) {
  return {
    highlight: () => {
      const editorState = editor.getState();
      console.log("state", editorState);
    }
  };
}
