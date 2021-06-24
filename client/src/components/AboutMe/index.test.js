/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { render } from '../../utils/test-utils';
import loadData from '../../redux/actions/actionsCreator';

jest.mock('../../redux/actions/actionsCreator');

describe('Dashboard component', () => {
  test('should call loadData', () => {
    loadData.mockReturnValue({ type: '' });
    render(<Dashboard />, {
      initialState: {}
    });
    expect(loadData).toHaveBeenCalled();
  });
});
