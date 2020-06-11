import React from 'react';
import Component from './app';
import renderer from 'react-test-renderer';

/** this works but isn't as useful as desired */
test('Button renders correctly', () => {
  expect(
    renderer
      .create(<Component />)
      .toJSON()
  ).toMatchSnapshot()
})