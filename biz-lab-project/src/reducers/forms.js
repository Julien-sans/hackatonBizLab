import project from '../data/project.json'
import { EDITOR_INPUT_FORM } from '../actions/forms';
import { CREATE_FORM } from '../actions/forms';

const initialState = {
  id: 3,
  name: '',
  description: '',
  type: '',
  competences: '',
  lien: '',
  equipe: '',
  initiateur: '',
  project: project
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITOR_INPUT_FORM:
      const { key, value } = action
      return { ...state, [key]: value }
    case CREATE_FORM:
      const form = action.form
      return { ...state, project: [...state.project, form]}
    default:
    return state
  }
}

export default reducer;
