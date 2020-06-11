import React, { FC } from 'react';
import { css } from '@emotion/core';

const paragraphStyles = css`
  color: red;
`;

const buttonStyles = css`
  background-color: blue;
`;

const errorStyles = css`
  background-color: red;
`;

interface IProps {
  isError?: boolean;
}

const App: FC<IProps> = props => (
  <div>
    <p css={paragraphStyles}>Hello</p>
    <button css={props.isError ? errorStyles : buttonStyles}>World</button>
  </div>
);

export default App;
