/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Experience from './index';
import { render } from '../../utils/test-utils';
import loadData from '../../redux/actions/actionsCreator';

jest.mock('../../redux/actions/actionsCreator');

describe('Education component', () => {
  test('should call loadData', () => {
    loadData.mockReturnValue({ type: '' });
    render(<Experience />, {
      initialState: {
        info: []
      }
    });
    expect(loadData).toHaveBeenCalled();
  });
});
