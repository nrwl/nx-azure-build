import React from 'react';
import { render } from '@testing-library/react';

import ReactLib6 from './react-lib6';

describe(' ReactLib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib6 />);
    expect(baseElement).toBeTruthy();
  });
});
