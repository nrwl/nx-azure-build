import React from 'react';
import { render } from '@testing-library/react';

import ReactLib0 from './react-lib0';

describe(' ReactLib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib0 />);
    expect(baseElement).toBeTruthy();
  });
});
