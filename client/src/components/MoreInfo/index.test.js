/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Moreinfo from './index';
import { render } from '../../utils/test-utils';
import loadData from '../../redux/actions/actionsCreator';

jest.mock('../../redux/actions/actionsCreator');

describe('Moreinfo component', () => {
  test('should call loadData', () => {
    loadData.mockReturnValue({ type: '' });
    render(<Moreinfo />, {
      initialState: {
        info: []
      }
    });
    expect(loadData).toHaveBeenCalled();
  });
});
