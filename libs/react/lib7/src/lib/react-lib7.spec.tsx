import React from 'react';
import { render } from '@testing-library/react';

import ReactLib7 from './react-lib7';

describe(' ReactLib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib7 />);
    expect(baseElement).toBeTruthy();
  });
});
