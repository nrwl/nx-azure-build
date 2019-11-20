import React from 'react';
import { render } from '@testing-library/react';

import ReactLib5 from './react-lib5';

describe(' ReactLib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib5 />);
    expect(baseElement).toBeTruthy();
  });
});
