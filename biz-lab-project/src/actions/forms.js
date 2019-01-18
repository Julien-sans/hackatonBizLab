export const EDITOR_INPUT_FORM = 'EDITOR_INPUT_FORM';
export const CREATE_FORM = 'CREATE_FORM';

export const editorInputForm = (key, value) => ({
  type: EDITOR_INPUT_FORM,
  key,
  value
});

export const createProject = (form) => ({
  type: CREATE_FORM,
  form
})
