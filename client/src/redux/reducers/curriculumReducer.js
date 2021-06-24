import actionTypes from '../actions/actionTypes';

function curriculumReducer(data = [], action) {
  let updatedData = [...data];

  switch (action.type) {
    case actionTypes.LOAD_CURRICULUM_DATA:
      updatedData = [...action.info];
      break;
    default:
      break;
  }
  return updatedData;
}

export default curriculumReducer;
