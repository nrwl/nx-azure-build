import React from 'react';
import { render } from '@testing-library/react';

import ReactLib9 from './react-lib9';

describe(' ReactLib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib9 />);
    expect(baseElement).toBeTruthy();
  });
});
