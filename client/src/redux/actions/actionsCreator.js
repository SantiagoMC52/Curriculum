import axios from 'axios';
import actionTypes from './actionTypes';

const URL = process.env.REACT_APP_URL;

export default function loadData() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM_DATA,
        info: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_CURRICULUM_ERROR
      });
    }
  };
}
