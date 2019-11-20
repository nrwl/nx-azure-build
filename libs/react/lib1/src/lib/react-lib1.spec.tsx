import React from 'react';
import { render } from '@testing-library/react';

import ReactLib1 from './react-lib1';

describe(' ReactLib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib1 />);
    expect(baseElement).toBeTruthy();
  });
});
