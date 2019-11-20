import React from 'react';
import { render } from '@testing-library/react';

import ReactLib8 from './react-lib8';

describe(' ReactLib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib8 />);
    expect(baseElement).toBeTruthy();
  });
});
