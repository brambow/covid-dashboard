import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('renders without error', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
