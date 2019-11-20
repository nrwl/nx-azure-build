import React from 'react';
import { render } from '@testing-library/react';

import ReactLib4 from './react-lib4';

describe(' ReactLib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib4 />);
    expect(baseElement).toBeTruthy();
  });
});
