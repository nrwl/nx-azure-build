import React from 'react';
import { render } from '@testing-library/react';

import ReactLib12 from './react-lib12';

describe(' ReactLib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib12 />);
    expect(baseElement).toBeTruthy();
  });
});
