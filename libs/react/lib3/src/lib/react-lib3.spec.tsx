import React from 'react';
import { render } from '@testing-library/react';

import ReactLib3 from './react-lib3';

describe(' ReactLib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib3 />);
    expect(baseElement).toBeTruthy();
  });
});
