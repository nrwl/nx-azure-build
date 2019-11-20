import React from 'react';
import { render } from '@testing-library/react';

import ReactLib10 from './react-lib10';

describe(' ReactLib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib10 />);
    expect(baseElement).toBeTruthy();
  });
});
