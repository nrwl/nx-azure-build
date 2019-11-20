import React from 'react';
import { render } from '@testing-library/react';

import ReactLib11 from './react-lib11';

describe(' ReactLib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib11 />);
    expect(baseElement).toBeTruthy();
  });
});
