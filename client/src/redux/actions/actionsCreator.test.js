import actionTypes from './actionTypes';
import loadData from './actionsCreator';

jest.mock('axios');

describe('loadData', () => {
  test('should dispatch LOAD_CURRICULUM_ERROR', async () => {
    const loadDataResponse = loadData();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn()
    });
    const dispatch = jest.fn();
    await loadDataResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_CURRICULUM_ERROR
    });
  });
});
