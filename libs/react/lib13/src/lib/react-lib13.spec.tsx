import React from 'react';
import { render } from '@testing-library/react';

import ReactLib13 from './react-lib13';

describe(' ReactLib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib13 />);
    expect(baseElement).toBeTruthy();
  });
});
