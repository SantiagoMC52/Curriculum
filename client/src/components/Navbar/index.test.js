/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../utils/test-utils';
import Navbar from './index';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Navbar Component', () => {
  test('should contain text Education', () => {
    render(<Navbar />, container);
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
  });
});
