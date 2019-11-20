import React from 'react';
import { render } from '@testing-library/react';

import ReactLib14 from './react-lib14';

describe(' ReactLib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib14 />);
    expect(baseElement).toBeTruthy();
  });
});
